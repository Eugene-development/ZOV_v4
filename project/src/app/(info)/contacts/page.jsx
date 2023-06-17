import Head from "./z-module/components/Head";
import Map from "./z-module/components/Map";
import Addresses from "./z-module/components/Addresses";

export const metadata = {
  title: 'Фабрика ЗОВ | Наши салоны',
  description: 'Адреса салонов и другая контактная информация',
}

export default () => {
  return (
    <>
      <Head/>
      <Addresses/>
      {/* <Map/> */}
    </>
  );
}
