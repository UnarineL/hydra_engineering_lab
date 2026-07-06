import { HydraKernel } from "@hydra/kernel";
import { Terminal } from "@hydra/terminal";

const hydra = new HydraKernel();

hydra.start();

const terminal = new Terminal();

terminal.start();