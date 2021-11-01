import { ClinkerSilo } from "./ClinkerSilo";
import { Pipe1 } from "./Pipe1";
import { HbiBin } from "./HbiBin";
import { DryBin } from "./DryBin";
import { Pipe6 } from "./Pipe6";
import { Pipe } from "./Pipe";
import { Clinker } from "./Clinker";
import { DrySilo } from "./DrySilo";
import { Pipe3 } from "./Pipe3";

export const nodeTypes = {
    "machine-left": ClinkerSilo,
    "machine-bottom": Clinker,
    "machine-right": DrySilo,
    "custom-pipe": Pipe,
    "custom-pipe-1": Pipe1,
    "custom-pipe-3": Pipe3,
    "custom-pipe-6": Pipe6,
    "machine-center-left": HbiBin,
    "machine-center-right": DryBin
}