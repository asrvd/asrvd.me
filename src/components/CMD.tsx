/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/display-name */
import {
  ActionId,
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarSearch,
  KBarResults,
  useMatches,
  ActionImpl,
  // useRegisterActions,
} from "kbar";
import React from "react";

export default function Palette() {
  return (
    <KBarPortal>
      <KBarPositioner className="z-50 select-none backdrop-blur bg-zinc-800/30 font-clash overflow-hidden">
        <KBarAnimator className="w-[90%] lg:w-[44%] md:w-2/3 overflow-hidden text-lg text-white bg-zinc-100 rounded-lg dark:bg-zinc-900 min-w-500 shadow-xl kbar">
          <KBarSearch className="w-full p-3 text-sm text-gray-900 bg-gray-100 rounded-lg outline-none dark:bg-zinc-900 dark:text-zinc-200" />
          <RenderResults />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
}

function RenderResults() {
  const { results, rootActionId } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div
            className="w-full h-full p-3 text-xs text-gray-700 uppercase dark:text-zinc-500 cursor-pointer"
            key={item}
          >
            {item}
          </div>
        ) : (
          <ResultItem
            key={item.id}
            action={item}
            active={active}
            currentRootActionId={rootActionId!}
          />
        )
      }
    />
  );
}

const ResultItem = React.forwardRef(
  (
    {
      action,
      active,
      currentRootActionId,
    }: {
      action: ActionImpl;
      active: boolean;
      currentRootActionId: ActionId;
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    const ancestors = React.useMemo(() => {
      if (!currentRootActionId) return action.ancestors;
      const index = action.ancestors.findIndex(
        (ancestor) => ancestor.id === currentRootActionId
      );
      return action.ancestors.slice(index + 1);
    }, [action.ancestors, currentRootActionId]);

    return (
      <div
        ref={ref}
        className={`py-2 px-3 flex align-center justify-between cursor-pointer transition-all ${
          active
            ? "bg-zinc-100 dark:bg-zinc-800 hover:dark:bg-zinc-800 hover:bg-zinc-200 duration-200"
            : "transparent"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="flex flex-col text-sm text-gray-900 dark:text-zinc-200">
            <div className="flex gap-2">
              {ancestors.length > 0 &&
                ancestors.map((ancestor) => (
                  <div key={ancestor.id} className="text-zinc-500">
                    <span className="mr-2">{ancestor.name}</span>
                    <span>&rsaquo;</span>
                  </div>
                ))}
              {action.icon}
              <span>{action.name}</span>
            </div>
            {action.subtitle && (
              <span className="text-xs text-zinc-400">{action.subtitle}</span>
            )}
          </div>
        </div>
        {action.shortcut?.length ? (
          <div className="flex items-center justify-center">
            {action.shortcut.map((sc) => (
              <kbd
                key={sc}
                className="px-2 py-1 ml-2 text-sm bg-zinc-300 rounded dark:bg-zinc-700 dark:text-zinc-300 text-zinc-600 h-fit"
              >
                {sc}
              </kbd>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
);
