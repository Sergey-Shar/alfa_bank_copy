interface IButton {
    id: string;
    name: string;
    data: string;
    active: boolean;

}

export   const button: IButton[] = [
    {
        id:'1',
        name: 'Топ!',
        data: 'Top',
        active: false,
    },
    {
        id:'2',
        name: 'Кредиты',
        data: 'Credit',
        active: false,
    },
    {
        id:'3',
        name: 'Карточки',
        data: 'Card',
        active: false,
    },
    {
        id:'4',
        name: 'Инвистиции',
        data: 'Credit',
        active: false,
    },
    {
        id:'5',
        name: 'Депозиты',
        data: 'Top',
        active: false,
    },
    {
        id:'6',
        name: 'Лизинг',
        data: 'Card',
        active: false,
    },
]
