export enum ECardState {
    hideInfo = 'hidden-info',
    showDefenition = 'show-defenition',
    showExamples = 'show-examples',
    showAllInfo = 'shown-info'
}

export type ICard = {
    data: {
        name: string,
        defenition: string,
        example?: string,
        translation?: string
    },
    state: ECardState
}