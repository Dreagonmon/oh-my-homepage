import os
ICON_DIR = "feather_icons"
OUTPUT_JS = "icons.jsx"

def main():
    output = open(OUTPUT_JS, "wt", encoding="utf-8")
    # import sys
    # output = sys.stdout
    output.write("import { h } from \"preact\";\n")
    output.write("/* Feather Icons */\n")
    output.write("/** @type {Record<string, h.JSX.Element>} */\n")
    output.write("export const FEATHER_ICONS = {\n")
    for name in os.listdir(ICON_DIR):
        if not name.lower().endswith(".svg"):
            continue
        filename = os.path.join(ICON_DIR, name)
        iconname = name[:-len(".svg")]
        with open(filename, "rt", encoding="utf-8") as f:
            icondata = f.read()
        output.write("    ")
        output.write("\"")
        output.write(iconname)
        output.write("\": ")
        output.write(icondata)
        output.write(",\n")
    output.write("}\n")

if __name__ == "__main__":
    main()