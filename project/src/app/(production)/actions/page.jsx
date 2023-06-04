import { usePathname } from "next/navigation"

import Action from "./z-module/components/action";

export const metadata = {
  title: 'Фабрика ЗОВ | Акции',
  description: 'Скидки и акции компании ЗОВ',
}

export default () => {
    // const pathname = usePathname();
    return (
        <Action/>
    )
}