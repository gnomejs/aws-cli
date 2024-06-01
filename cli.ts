import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("aws", {
    name: "aws",
    windows: [
        "${ProgramFiles}\\Amazon\\AWSCLIV2\\aws.exe",
    ],
    linux: [
        "/usr/bin/aws",
    ],
});

/**
 * Represents a aws command.
 */
export class AwsCommand extends Command {
    /**
     * Creates a new instance of the `ttCliCommand` class.
     * @param args The command arguments.
     * @param options The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("aws", args, options);
    }
}

/**
 * Creates a new instance of the AwsCommand class.
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns An instance of the AwsCommand class.
 */
export function aws(args?: CommandArgs, options?: CommandOptions): AwsCommand {
    return new AwsCommand(args, options);
}
