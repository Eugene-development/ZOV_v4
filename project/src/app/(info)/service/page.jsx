import ServiceList from "./z-module/components/ServiceList"

export const metadata = {
  title: 'Фабрика ЗОВ | Сервис',
  description: 'Услуги нашей компании',
}


export default function Page() {
  return (
      <ServiceList/>
  )
}
