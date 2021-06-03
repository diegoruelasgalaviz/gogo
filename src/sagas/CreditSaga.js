import { takeLatest, put, call } from "redux-saga/effects"
import {fetchCredits, createCredits, updateCredits, deleteCredits, fetchSingleCredits} from "../actions/CreditsAction";
import {Credits} from "../constants/action";

function* fetchCreditsSaga({ payload }) {
    const result = yield call(fetchCredits, payload)
    if (result.status === 'success') {
        yield put({
            type: Credits.FETCH_ALL_Credits_SUCCESS,
            payload: result.data
        })
    } else {
        yield put({
            type: Credits.FETCH_ALL_Credits_FAILURE,
            payload: result
        })
    }
}

function* fetchSingleCreditsaga({ payload }) {
    const result = yield call(fetchSingleCredits, payload)
    if (result.status === 'success') {
        yield put({
            type: Credits.FETCH_SINGLE_Credits_SUCCESS,
            payload: result.data
        })
    } else {
        yield put({
            type: Credits.FETCH_SINGLE_Credits_FAILURE,
            payload: result
        })
    }
}

function* createCreditsaga(data) {
    const result = yield call(createCredits, data)
    if (result.status === 'success') {
        yield put({
            type: Credits.CREATE_Credits_SUCCESS,
            payload: result
        })
    } else {
        yield put({
            type: Credits.CREATE_Credits_FAILURE,
            payload: result.message
        })
    }
}

function* updateCreditsaga(data) {
    const result = yield call(updateCredits, data)
    if (result.status === 'success') {
        yield put({
            type: Credits.UPDATE_Credits_SUCCESS,
            payload: result.message
        })
    } else {
        yield put({
            type: Credits.UPDATE_Credits_FAILURE,
            payload: result.message
        })
    }
}

function* deleteCreditsaga(id) {
    const result = yield call(deleteCredits, id)
    if (result.status === 'success') {
        yield put({
            type: Credits.DELETE_Credits_SUCCESS,
            payload: result.message
        })
    } else {
        yield put({
            type: Credits.DELETE_Credits_FAILURE,
            payload: result.error
        })
    }
}

export function * watchFetchCreditsSaga() {
    yield takeLatest(Credits.FETCH_ALL_Credits, fetchCreditsSaga)
}

export function * watchFetchSingleCreditsaga() {
    yield takeLatest(Credits.FETCH_SINGLE_Credits, fetchSingleCreditsaga)
}

export function * watchCreateCreditsaga() {
    yield takeLatest(Credits.CREATE_Credits, createCreditsaga)
}

export function * watchUpdateCreditsaga() {
    yield takeLatest(Credits.UPDATE_Credits, updateCreditsaga)
}

export function * watchDeleteCreditsaga() {
    yield takeLatest(Credits.DELETE_Credits, deleteCreditsaga)
}

export default [
    watchFetchCreditsSaga(),
    watchFetchSingleCreditsaga(),
    watchCreateCreditsaga(),
    watchUpdateCreditsaga(),
    watchDeleteCreditsaga()
]