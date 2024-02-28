import { MainMenu } from './menu/MainMenu'

export function Sidebar (props: {customClass: string}) {
    return <aside className={props.customClass}>
        <MainMenu />
    </aside>
}