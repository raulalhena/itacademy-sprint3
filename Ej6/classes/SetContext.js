
import os from "os";
import { join } from "path";
import Write from "./Write.js";
import Read from "./Read.js";
import ReverseData from "./ReverseData.js";

let slash = "/";
if(os.platform === "Win32" || os.platform === "Win64") slash = "\\";

const config = {
    inbox: join(`..${slash}`, "inbox"),
    outbox: join(`..${slash}`, "outbox"),
    Write,
    Read,
    ReverseData
}

export default config;