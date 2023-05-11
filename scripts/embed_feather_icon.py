import os
ICON_DIR = "feather_icons"
OUTPUT_JS = "icons.jsx"

def main():
    output = open(OUTPUT_JS, "wt", encoding="utf-8")
    # import sys
    # output = sys.stdout
    output.write("import { h } from \"preact\";\n")
    output.write("/* Feather Icons */\n")
    output.write("/* Auto Generated File, Do Not Modify. */\n")
    output.write("\n")
    output.write("/**\n")
    output.write(" * @param {string} iconName\n")
    output.write(" * @param {h.JSX.SVGAttributes<SVGSVGElement>} [props={}]\n")
    output.write(" * @returns {h.JSX.Element | undefined}\n")
    output.write(" */\n")
    output.write("export const renderIconSvg = (iconName, props = {}) => {\n")
    output.write("    switch (iconName) {\n")
    for name in os.listdir(ICON_DIR):
        if not name.lower().endswith(".svg"):
            continue
        filename = os.path.join(ICON_DIR, name)
        iconname = name[:-len(".svg")]
        with open(filename, "rt", encoding="utf-8") as f:
            icondata = f.read()
        jsx = icondata[:4] + " {...props}" + icondata[4:]
        output.write(f"        case \"{iconname}\": return {jsx}; break;\n")
    output.write("        default: break;\n")
    output.write("    }\n")
    output.write("    return undefined;\n")
    output.write("}\n")

if __name__ == "__main__":
    main()