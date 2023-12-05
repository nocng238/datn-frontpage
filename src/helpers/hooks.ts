import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useLayoutEffect,
  RefObject,
} from "react";
import { throttle } from "lodash";
import { useLocation } from "react-router-dom";
import { getScreenSpacing } from "./utils";
import { Pagination, emptyPagination } from "@app/types";
//   import Scrollbars from "react-custom-scrollbars"

export const mobileScreen = 992;
export const tabletScreen = 1024;

export const useWindowSize = () => {
  const [size, setSize] = useState<{
    height: number;
    width: number;
    spacing: number;
    isMobile: boolean;
    isHD: boolean;
  }>({
    height: window.innerHeight,
    width: window.innerWidth,
    spacing: getScreenSpacing(window.innerWidth),
    isMobile: window.innerWidth < mobileScreen,
    isHD: window.innerWidth < tabletScreen,
  });

  const updateSize = throttle(
    () => {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth,
        spacing: getScreenSpacing(window.innerWidth),
        isMobile: window.innerWidth < mobileScreen,
        isHD: window.innerWidth < tabletScreen,
      });
    },
    500,
    {
      leading: false,
      trailing: true,
    }
  );

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    window.addEventListener("orientationchange", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("orientationchange", updateSize);
    };
    // eslint-disable-next-line
  }, []);

  return size;
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const useScrollToHash = () => {
  useEffect(() => {
    const hashEl = document.getElementById(window.location.hash.slice(1));
    if (hashEl) {
      hashEl.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);
  return null;
};

export function useIsUpdateProjectBuild(
  defaultValue = { isUpdate: false, componentId: "" }
) {
  const [value, setValue] = React.useState(defaultValue);
  return { value, setValue };
}

export function useBoolean(defaultValue = false) {
  return useDefault(defaultValue);
}

export function useNumber(defaultValue = 0) {
  return useDefault(defaultValue);
}

export function useString(defaultValue = "") {
  return useDefault(defaultValue);
}

export function useArray(defaultValue = []) {
  return useDefault(defaultValue);
}

export function useObject(defaultValue = {}) {
  return useDefault(defaultValue);
}

export interface IUseDefaultValueProps {
  value: any;
  setValue: React.Dispatch<any>;
}
export function useDefault(defaultValue: any): IUseDefaultValueProps {
  const [value, setValue] = React.useState(defaultValue);
  return { value, setValue };
}

export default function useComponentVisible(initialIsVisible: boolean) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);
  const ref = useRef<any>(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(true);
    } else {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}

interface Size {
  width: number;
  height: number;
}

export function useElementSize<T extends HTMLElement = HTMLDivElement>(): [
  (node: T | null) => void,
  Size,
  () => void
] {
  // Mutable values like 'ref.current' aren't valid dependencies
  // because mutating them doesn't re-render the component.
  // Instead, we use a state as a ref to be reactive.
  const [ref, setRef] = useState<T | null>(null);
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  });

  // Prevent too many rendering using useCallback
  const handleSize = useCallback(() => {
    setTimeout(() => {
      setSize({
        width: ref?.offsetWidth || 0,
        height: ref?.offsetHeight || 0,
      });
    }, 100);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.offsetHeight, ref?.offsetWidth]);

  useEventListener("resize", handleSize);

  useLayoutEffect(() => {
    handleSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.offsetHeight, ref?.offsetWidth]);

  return [setRef, size, handleSize];
}

function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void
): void;
function useEventListener<
  K extends keyof HTMLElementEventMap,
  T extends HTMLElement = HTMLDivElement
>(
  eventName: K,
  handler: (event: HTMLElementEventMap[K]) => void,
  element: RefObject<T>
): void;

function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  T extends HTMLElement | void = void
>(
  eventName: KW | KH,
  handler: (
    event: WindowEventMap[KW] | HTMLElementEventMap[KH] | Event
  ) => void,
  element?: RefObject<T>
) {
  // Create a ref that stores handler
  const savedHandler = useRef<typeof handler>();

  useEffect(() => {
    // Define the listening target
    const targetElement: T | Window = element?.current || window;
    if (!(targetElement && targetElement.addEventListener)) {
      return;
    }

    // Update saved handler if necessary
    if (savedHandler.current !== handler) {
      savedHandler.current = handler;
    }

    // Create event listener that calls handler function stored in ref
    const eventListener: typeof handler = (event) => {
      // eslint-disable-next-line no-extra-boolean-cast
      if (!!savedHandler?.current) {
        savedHandler.current(event);
      }
    };

    targetElement.addEventListener(eventName, eventListener);

    // Remove event listener on cleanup
    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element, handler]);
}

type AnyEvent = MouseEvent | TouchEvent;
export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: AnyEvent) => void
) {
  useEffect(() => {
    const listener = (event: AnyEvent) => {
      const el = ref?.current;
      if (!el || el.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener(`mousedown`, listener);
    document.addEventListener(`touchstart`, listener);

    return () => {
      document.removeEventListener(`mousedown`, listener);
      document.removeEventListener(`touchstart`, listener);
    };
  }, [ref, handler]);
}

//   export const useHandleScroll = (actionLoadMoreData?: () => void) => {
//     const [scrollbar, setScrollbar] = useState<Scrollbars | null>(null)

//     const handleScroll = async () => {
//       const scrollTop = scrollbar.getScrollTop()
//       const scrollHeight = scrollbar.getScrollHeight()
//       const offsetHeight = scrollbar.getClientHeight()

//       if (scrollHeight - (scrollTop + offsetHeight) === 0 && actionLoadMoreData) {
//         actionLoadMoreData()
//       }
//     }

//     const handleScrollToTop = () => {
//       if (scrollbar) {
//         scrollbar.view.scroll({
//           top: 0,
//           behavior: "smooth",
//         })
//       }
//     }

//     const handleScrollToBottom = () => {
//       if (scrollbar && scrollbar.view) {
//         const scrollHeight = scrollbar.getScrollHeight()
//         scrollbar.view.scroll({
//           top: scrollHeight,
//           behavior: "smooth",
//         })
//       }
//     }

//     const handleScrollToPosition = async (position: number) => {
//       if (scrollbar) {
//         scrollbar.view.scroll({
//           top: position,
//           behavior: "smooth",
//         })
//       }
//     }

//     return {
//       scrollbar,
//       setScrollbar,
//       handleScroll,
//       handleScrollToTop,
//       handleScrollToPosition,
//       handleScrollToBottom,
//     }
//   }

export const useLoadMore = (data, actionLoadMore) => {
  const rowsPerPageHook = useNumber(10);
  const page = useNumber(1);
  const isMoreData = useBoolean(true);

  const handleReachedBottom = () => {
    if (!isMoreData.value || !data.length) {
      return;
    }

    actionLoadMore();
  };

  return {
    isMoreData,
    page,
    rowsPerPageHook,
    handleReachedBottom,
  };
};

export const useCheckActionLoading = (submitAction: any) => {
  const [actionLoading, setActionLoading] = useState(false);

  const handleSubmit = () => {
    if (actionLoading) {
      return;
    }
    setActionLoading(true);
    submitAction();
  };

  return {
    actionLoading,
    setActionLoading,
    handleSubmit,
  };
};

export const usePagination = () => {
  const [pagination, setPagination] = useState<Pagination>(emptyPagination);
  const currentPage = useNumber(0);
  const pageNumberLimit = 5;
  return {
    maxPage: Math.ceil(pagination.totalItems / pageNumberLimit),
    currentPage,
    pagination,
    setPagination,
    pageNumberLimit,
  };
};
