## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, use the installed graphify skill or instructions before doing anything else.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).

<!-- antislop:start -->
## antislop

This project uses antislop (filter, not a style guide): core rules in `.agents/skills/antislop/SKILL.md`, plus `antislop-ui`, `antislop-copywriting`, `antislop-human`, `antislop-layoutmobile`, `antislop-code` in `.agents/skills/`.

Rules:
- Always load the core `antislop` skill at session start; additionally load `antislop-ui` for visual work, `antislop-copywriting` for text, `antislop-human` for accessibility, `antislop-layoutmobile` for responsive work, `antislop-code` for comment cleanup.
- Mode is `during` (saved preference): guide work as it is built, close with the mandatory Delivery Gate PASS/FAIL report.
- Visual direction comes from `DESIGN.md`, never invented. If `DESIGN.md` asks for something antislop flags as slop, name the element and rule, then ask before keeping it.
<!-- antislop:end -->
