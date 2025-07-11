import { Suspense } from "react"
import { useDarkMode } from "~/hooks/useDarkmode"
import { OptionRoutingFirefox } from "./firefox"
import { PageAssistLoader } from "@/components/Common/PageAssistLoader"

export const OptionRouting = () => {
  const { mode } = useDarkMode()

  return (
    <div className={`${mode === "dark" ? "dark" : "light"} arimo`}>
      <Suspense fallback={<PageAssistLoader />}>
        <OptionRoutingFirefox />
      </Suspense>
    </div>
  )
}


