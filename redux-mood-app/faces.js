const faceContainer = $("#faceContainer")
const love = document.querySelector('#inLove')
const happyCry = document.querySelector('#happy-cry')
const pensive = document.querySelector('#pensive')
const drunk = document.querySelector('#drunk')

$(document).ready(() => {
    const state = store.getState()
    faceContainer.text(state.face)
})

love.addEventListener('click', (e) => {
    store.dispatch({ type: "IN_LOVE" })
    const state = store.getState()
    faceContainer.text(state.face)
})
happyCry.addEventListener('click', (e) => {
    store.dispatch({ type: "HAPPY_CRY" })
    const state = store.getState()
    faceContainer.text(state.face)
})
pensive.addEventListener('click', (e) => {
    store.dispatch({ type: "PENSIVE" })
    const state = store.getState()
    faceContainer.text(state.face)
})
drunk.addEventListener('click', (e) => {
    store.dispatch({ type: "DRUNK" })
    const state = store.getState()
    faceContainer.text(state.face)
})