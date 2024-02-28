import { IMainMenuItem } from './menu.interface'

export const MAIN_MENU: IMainMenuItem[] = [
    {
        name: 'Мой словарь',
        href: '/',
        icon: 'library-big'
    },
    {
        name: 'Добавить слово',
        href: '/add',
        icon: 'plus-square'
    },
]