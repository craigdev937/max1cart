export interface CAR {
    onClose: () => void
};

export interface SHO {
    children: React.ReactNode
};

export interface IData {
    id: string,
    title: string,
    price: number,
};

export interface IPro extends IData {
    image: string,
    description: string
};

export interface ICart extends IData {
    quantity: number
};

export interface ICartState {
    items: ICart[]
};


