import { useQuery } from "@tanstack/react-query";

interface IProductBase {
  description: string;
  image: string;
  price: number;
  id: number;

  color?: string[];
  yearOfManufactur?: number;
}

interface IGramophone extends IProductBase {
  category: "Граммофон";
  name: string;
}

interface IRecord extends IProductBase {
  category: "Пластинка";
  genre?: string;
  songerName: string;
  songName: string;
}

export type IProduct = IGramophone | IRecord;

const mockData: IProduct[] = [
  {
    category: "Пластинка",
    id: 1,

    songerName: "Elvis Presley",
    songName: "Love me tender",
    genre: "rock-n-roll",

    description:
      "Мини-альбом американского певца Элвиса Пресли, являющийся саундтреком к одноимённому фильму, ставшем дебютом Пресли в кино. Заглавная песня также вышла ранее на сингле — именно её успех дал название и всему фильму. Мини-альбом занял 9-е место в американском хит-параде альбомов.",
    image: "https://upload.wikimedia.org/wikipedia/ru/0/05/LMTEP.jpg",
    price: 3500,
  },
  {
    category: "Граммофон",
    id: 2,

    name: "Victor",
    description:
      "Данная модель граммофона более удобная и компактная в отличии от салонных граммофонов с трубой. В дальнейшем подобные модели получат название кабинетные, настольные. Наличие дверок в нижней части корпуса, позволяет регулировать громкость звука. Звуковая трубка (тонарм) также находится снаружи, как и в салонном граммофоне вне корпуса, но направление звука идет внутрь корпуса. Великолепный предмет интерьера. Отличное звучание.",
    image:
      "https://s3-alpha-sig.figma.com/img/fe47/f234/415a05b288439c4b65daeef19e21dcbd?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cSa8svfiqGa3WvB9D1lfDzySj2QnQyjz6~xdw7ZzBc3r6rHbqvABoJbhfEEw7DVIWQYkiTTkLdvRiImQ5cGcxuskHmttBDh~UOF-~cO8xLoLmUyJkA~d~PZgQIpFEfIe9J-RlNBssjIMh5pFd8WkR~fDxelhcN4hesOb~Cozqm3Wip6e~IojyL86GooaSF3bPDfe5OONMFqDoWlEqGABfS9bE~SyWdLMpvI~ewCZfDaMJvN6Ujn5XJAiLXJsex48VE3uRIrT~xTi9F3hNA0EIGDZoi5JmMpebpgkKyiLdvaumT8x5zduM~NXrWVZt7YuX3MjOM5LNiqCYiFw3CcViw__",
    price: 8900,
    yearOfManufactur: 1920,
    color: ["white"],
  },
];

export const useProductsQuery = () => {
  return useQuery({
    queryKey: ["productsList"],
    queryFn: async (): Promise<IProduct[]> =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(mockData);
        }, 0);
      }),
  });
};
