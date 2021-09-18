export const state = () => ({
    height: undefined
})
export const getters = {
}
export const mutations = {
    setHeight(state, name) {
        switch (name) {
            case 'xs':
                state.height = undefined
                break
            case 'sm':
                state.height = 80
                break
            case 'md':
                state.height = 90
                break
            case 'lg':
                state.height = 120
                break
            case 'xl':
                state.height = 200
                break
            default:
                state.height = undefined
                break
        }

    }
}
export const actions = {
}