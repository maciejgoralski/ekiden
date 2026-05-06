class DataBase {
  constructor(sSpreadsheetId) {
    this.m_SpreadsheetId = sSpreadsheetId || "1bc53N5nn51vc3LtNvSHvEld8QSB-VCfQg2KQT4TMdwc";
    this.scriptId = "gviz-script-main2";
    this.pollIntervalMs = 10000;
    this.pollTimer = null;
    this.isLoading = false;
  }

  loadJsonFromSheet() {
    return new Promise((resolve) => {
      if (this.isLoading) {
        resolve(null);
        return;
      }

      this.isLoading = true;
      const callbackName = "ekidenMain2Callback_" + Date.now();
      window[callbackName] = (response) => {
        delete window[callbackName];
        const gvizScript = document.getElementById(this.scriptId);
        if (gvizScript) {
          gvizScript.remove();
        }

        try {
          resolve(this.parseGvizToJson(response));
        } catch (err) {
          console.log("Blad parsowania danych z Google Sheets:", err.message);
          resolve({ teams: [] });
        } finally {
          this.isLoading = false;
        }
      };

      const existingScript = document.getElementById(this.scriptId);
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement("script");
      script.id = this.scriptId;
      script.src = `https://docs.google.com/spreadsheets/d/${this.m_SpreadsheetId}/gviz/tq?tqx=out:json;responseHandler:${callbackName}`;
      script.onerror = () => {
        delete window[callbackName];
        this.isLoading = false;
        console.log("Nie udalo sie pobrac danych z Google Sheets");
        resolve({ teams: [] });
      };
      document.head.appendChild(script);
    });
  }

  startPolling(onData) {
    const refresh = async () => {
      const data = await this.loadJsonFromSheet();
      if (!data || typeof onData !== "function") {
        return;
      }
      onData(data);
    };

    this.stopPolling();
    refresh();
    this.pollTimer = setInterval(refresh, this.pollIntervalMs);
  }

  stopPolling() {
    if (!this.pollTimer) {
      return;
    }
    clearInterval(this.pollTimer);
    this.pollTimer = null;
  }

  parseGvizToJson(response) {
    if (!response || !response.table || !response.table.cols || !response.table.rows) {
      return { teams: [] };
    }

    const cols = response.table.cols.map((c) => c.label);
    const rows = response.table.rows.map((r) => {
      const obj = {};
      r.c.forEach((cell, i) => {
        obj[cols[i]] = cell ? cell.v : null;
      });
      return obj;
    });

    const teamsMap = {};
    for (const row of rows) {
      const teamIndex = parseInt(row["index"]);
      if (isNaN(teamIndex)) {
        continue;
      }

      if (!teamsMap[teamIndex]) {
        teamsMap[teamIndex] = {
          index: teamIndex,
          color: row["color"] || "#999999",
          runners: {}
        };
      }

      const runnerNumber = String(row["runners_number"] || "");
      if (!runnerNumber) {
        continue;
      }

      if (!teamsMap[teamIndex].runners[runnerNumber]) {
        teamsMap[teamIndex].runners[runnerNumber] = {
          number: runnerNumber,
          name: row["runners_name"] || "",
          laps: []
        };
      }

      teamsMap[teamIndex].runners[runnerNumber].laps.push({
        start: this.normalizeDateValue(row["lap_start"]),
        end: this.normalizeDateValue(row["lap_end"])
      });
    }

    const teams = Object.values(teamsMap)
      .sort((a, b) => a.index - b.index)
      .map((team) => ({
        index: team.index,
        color: team.color,
        runners: Object.values(team.runners).sort((a, b) => parseInt(a.number) - parseInt(b.number))
      }));

    return { teams };
  }

  // sprawdzić czy to musi być takie skomplikowane - może wystarczy new Date(value) i sprawdzenie czy jest poprawna?
  normalizeDateValue(value) {
    if (value === null || value === undefined || value === "") {
      return null;
    }

    if (value instanceof Date && !isNaN(value.getTime())) {
      return value;
    }

    if (typeof value === "string") {
      const trimmed = value.trim();
      const gvizMatch = /^Date\((.*)\)$/.exec(trimmed);
      if (gvizMatch) {
        const parts = gvizMatch[1].split(",").map((part) => parseInt(part.trim(), 10));
        if (parts.length >= 3 && parts.slice(0, 3).every((n) => !isNaN(n))) {
          const year = parts[0];
          const month = parts[1];
          const day = parts[2];
          const hour = isNaN(parts[3]) ? 0 : parts[3];
          const minute = isNaN(parts[4]) ? 0 : parts[4];
          const second = isNaN(parts[5]) ? 0 : parts[5];
          const millisecond = isNaN(parts[6]) ? 0 : parts[6];
          return new Date(year, month, day, hour, minute, second, millisecond);
        }
      }

      const parsedFromString = new Date(trimmed);
      if (!isNaN(parsedFromString.getTime())) {
        return parsedFromString;
      }
      return null;
    }

    const parsed = new Date(value);
    if (!isNaN(parsed.getTime())) {
      return parsed;
    }

    return null;
  }
}