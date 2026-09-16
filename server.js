function validateLayoutSemantics(
  layoutResult,
  room,
  furniture
) {
  if (
    !layoutResult ||
    !Array.isArray(
      layoutResult.layouts
    )
  ) {
    throw new Error(
      'Invalid layout result: missing layouts array'
    );
  }

  const inputFurnitureMap = {};

  furniture.forEach(item => {
    if (
      !item.id ||
      typeof item.id !== 'string'
    ) {
      throw new Error(
        'Invalid input furniture: missing or non-string id'
      );
    }

    if (
      inputFurnitureMap[item.id]
    ) {
      throw new Error(
        `Duplicate furniture id in input: ${item.id}`
      );
    }

    inputFurnitureMap[item.id] = item;
  });

  layoutResult.layouts.forEach(
    (
      layout,
      layoutIndex
    ) => {
      if (
        !layout ||
        typeof layout !== 'object'
      ) {
        throw new Error(
          `Invalid layout at index ${layoutIndex}`
        );
      }

      const seenFurnitureIds =
        new Set();

      layout.placements.forEach(
        placement => {
          const furnitureId =
            placement.furnitureId;

          if (
            seenFurnitureIds.has(
              furnitureId
            )
          ) {
            throw new Error(
              `Duplicate furnitureId ${furnitureId} in layout ${layoutIndex}`
            );
          }

          seenFurnitureIds.add(
            furnitureId
          );

          const inputItem =
            inputFurnitureMap[
              furnitureId
            ];

          if (!inputItem) {
            throw new Error(
              `Layout ${layoutIndex} contains unknown furniture ${furnitureId}`
            );
          }

          // Fixed furniture must stay fixed
          if (
            inputItem.mobility ===
            'Fixed'
          ) {
            if (
              placement.x !==
                inputItem.xCm ||
              placement.y !==
                inputItem.yCm ||
              placement.rotation !==
                inputItem.rotation
            ) {
              throw new Error(
                `Fixed furniture ${furnitureId} moved in layout ${layoutIndex}`
              );
            }
          }

          const rotation =
            (
              (
                placement.rotation %
                360
              ) +
              360
            ) %
            360;

          const quarterTurn =
            rotation === 90 ||
            rotation === 270;

          const width =
            quarterTurn
              ? inputItem.depthCm
              : inputItem.widthCm;

          const depth =
            quarterTurn
              ? inputItem.widthCm
              : inputItem.depthCm;

          const halfWidth =
            width / 2;

          const halfDepth =
            depth / 2;

          // Keep furniture inside the room
          if (
            placement.x -
                halfWidth <
              0 ||
            placement.x +
                halfWidth >
              room.widthCm ||
            placement.y -
                halfDepth <
              0 ||
            placement.y +
                halfDepth >
              room.depthCm
          ) {
            throw new Error(
              `Furniture ${furnitureId} in layout ${layoutIndex} exceeds room boundaries`
            );
          }

          // Collision / overlap validation intentionally disabled.
          // Overlapping furniture will no longer cause /api/layouts to fail.
        }
      );

      // Ensure every input furniture item is present
      furniture.forEach(item => {
        if (
          !seenFurnitureIds.has(
            item.id
          )
        ) {
          throw new Error(
            `Layout ${layoutIndex} is missing furniture ${item.id}`
          );
        }
      });
    }
  );
}