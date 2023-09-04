import {
	API_LOAN_APPLICATION_LIST,
	API_UPDATE_LOAN_APPLICATION_STATUS,
	API_LOAN_APPLICATION_HISTORY_LIST,
	API_LOAN_APPLICATION_DETAILS,
	API_UPDATE_DOCUMENT_SENT_CORE,
	API_GET_LOAN_PRODUCT_TYPES,
	API_UPDATE_LOAN_APP,
	API_CHECK_CIF_EXISTING,
	API_RE_POLICY,
	API_NEW_CIF,
	API_LINK_CIF,
	API_LOAN_APPLICATION_BRE_RULES
} from './config'
import request from '@/utils/request'

export class loanApplicationApi {
	static getAll(params) {
		return request({
			url: API_LOAN_APPLICATION_LIST,
			method: 'GET',
			params
		})
	}

	static updateLoanApplicationStatus(data) {
		return request({
			url: API_UPDATE_LOAN_APPLICATION_STATUS,
			method: 'PUT',
			data
		})
	}

	static getHistoriesByLoanApp(loanAppId, params) {
		return request({
			url: API_LOAN_APPLICATION_HISTORY_LIST(loanAppId),
			method: 'GET',
			params
		})
	}

	static getLoanApplicationDetails(loanAppId) {
		return request({
			url: API_LOAN_APPLICATION_DETAILS(loanAppId),
			method: 'GET'
		})
	}

	static updateDocumentSentCore(data) {
		return request({
			url: API_UPDATE_DOCUMENT_SENT_CORE,
			method: 'PUT',
			data: data
		})
	}

	static getLoanAppProductTypes() {
		return request({
			url: API_GET_LOAN_PRODUCT_TYPES,
			method: 'GET'
		})
	}

	static updateLoanApp(data) {
		return request({
			url: API_UPDATE_LOAN_APP,
			method: 'POST',
			data: data
		})
	}

	static checkCifExisting(params) {
		return request({
			url: API_CHECK_CIF_EXISTING,
			method: 'GET',
			params
		})
	}

	static updateRePolicyLoanApp(data) {
		return request({
			url: API_RE_POLICY,
			method: 'POST',
			data: data
		})
	}

	static newCif(data) {
		return request({
			url: API_NEW_CIF,
			method: 'POST',
			data: data
		})
	}

	static linkCif(data) {
		return request({
			url: API_LINK_CIF,
			method: 'POST',
			data: data
		})
	}

	static getLoanApplicationBreRules(loanAppId) {
		return request({
			url: API_LOAN_APPLICATION_BRE_RULES(loanAppId),
			method: 'GET'
		})
	}
}
