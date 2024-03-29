export interface CAR {
    onClose: () => void
};

export interface SHO {
    children: React.ReactNode
};

export interface PRO {
    id: string,
    image: string,
    title: string,
    price: number,
    description: string
};

export interface IData {
    id: string,
    title: string,
    price: number,
};

export interface ICart extends IData {
    quantity: number
};

export interface ICartState {
    items: ICart[]
};


