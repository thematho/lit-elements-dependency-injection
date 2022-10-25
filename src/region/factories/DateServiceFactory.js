import * as moment from 'moment';

const noopService = {
	getDate(date) {
		return date;
	},
	format: '',
};

export const DateServiceFactory = (DATE_FORMAT) => {
	if (!DATE_FORMAT) return noopService;
	return {
		getDate(date) {
			return moment(date).format(this.format);
		},
		format: DATE_FORMAT,
	};
};
