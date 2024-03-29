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

export interface ICart {
    id: string,
    title: string,
    price: number,
    quantity: number
};

export interface ICartState {
    items: ICart[]
};


