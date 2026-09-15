# Spacify Recovery

This repository contains extracted production assets from the deployed Spacify prototype.

Live site:
https://spacify-prototype.muhamumar465.chatgpt.site/

## Important

These files are **compiled/deployed production assets**, not the original clean source repository.

Do not assume minified variable names, bundled file structure, or generated framework files represent the original project architecture.

The live deployed Spacify prototype should be treated as the behavioral source of truth.

## Main Objective

Recover the current Spacify prototype into a clean editable codebase while preserving existing functionality.

After feature parity is achieved, fix the:

**Room Scan → 2D Floor Plan**

pipeline, especially layout accuracy and measurement accuracy.

## What Must Be Preserved

Do not remove or simplify existing functionality, including:

* Free and Premium modes
* Scan Room
* AR scanning / corner capture
* Photo-based fallback
* Check Scan
* Measurement editing
* Furniture inventory
* Movable vs fixed furniture
* KAR choices
* Goals and constraints
* Premium Add / Replace flow
* Budget target
* Furniture Finder
* Feasibility checks
* Conflict resolution
* Layout generation
* Choose Layout
* Selected Layout
* Manual plan adjustment
* AI plan adjustment
* Final Plan
* Export functionality
* Feedback flow

## Important Extracted Files

The most important production bundle is:

`page-1qMgSgmG.js`

This contains much of the Spacify-specific frontend and business logic.

`index-D8pI1TRv.js`

contains routing/runtime information and confirms these backend routes exist:

* `/api/scan`
* `/api/layouts`
* `/api/adjust`
* `/api/chat`
* `/api/furniture-advice`

Other extracted files may mainly contain framework/runtime, CSS, or deployment code.

## Known Problem

The current deployed bundle contains default/sample room data, including hard-coded room dimensions and furniture positions.

These values must not be treated as genuine scan-derived measurements.

The current room-scan pipeline can produce inaccurate:

* room dimensions
* wall proportions
* openings
* furniture positions
* furniture dimensions
* furniture orientation
* overall 2D layout scale

## Desired Scan Pipeline

The intended architecture should be:

Room scan / AR / photos
→ detect room geometry
→ detect relative furniture positions
→ create proportional 2D representation
→ determine whether reliable real-world scale exists
→ if scale is uncertain, request one confirmed measurement
→ calibrate room and furniture consistently
→ validate geometry
→ show editable Check Scan result

Do not invent precise centimetre measurements when the available scan data does not support them.

## Existing Validation

Preserve useful validation already present in the production bundle, including checks for:

* furniture outside room boundaries
* furniture overlap
* blocked openings
* movement of fixed furniture
* walkway clearance
* usable path through the room

## Free vs Premium

Free and Premium should use the **same room-scan accuracy**.

Premium differentiation should remain in additional planning, furniture discovery, Add/Replace, budget, or AI assistance features.

Do not intentionally make Free scanning less accurate.

## Recovery Rules

1. Preserve the original extracted assets.
2. Do not overwrite or delete them.
3. Extract/recover clean source into separate folders such as:

```text
recovered-assets/
src/
components/
lib/
api/
```

4. Use the compiled assets as behavioral and implementation reference.
5. Recreate missing server-side logic when necessary.
6. Do not claim missing backend source was recovered if it was not present.
7. Avoid large unrelated rewrites.
8. Preserve current UX and product flow.

## Before Making Major Changes

First document:

* file inventory
* Spacify-specific files
* current feature map
* current scan flow
* frontend → API request/response contracts
* hard-coded/mock data
* missing backend logic
* reconstruction plan

Then implement changes incrementally.
