import type { ICard } from './card.interface'
import { ECardState } from './card.interface'
import './card.scss'

export function Card ({ item: { data, state } }: { item: ICard }) {
    return (
        <div className={`card card--${state}`}>
            <p className="card__title">{data.name}</p>
            { state !== ECardState.hideInfo &&
                <div className="card__details">
                    <div className="card__block">
                        <p className="card__subtitle">Defenition</p>
                        <p className="card__text">{data.defenition}</p>
                    </div>

                    { [ECardState.showExamples, ECardState.showAllInfo].includes(state) &&
                        <div className="card__block">
                            <p className="card__subtitle">Example</p>
                            <p className="card__text">{data.example}</p>
                        </div>
                    }

                    { [ECardState.showAllInfo].includes(state) &&
                        <div className="card__block">
                            <p className="card__subtitle">Translation</p>
                            <p className="card__text">{data.translation}</p>
                        </div>
                    }
                </div>
            }
        </div>
    )
}