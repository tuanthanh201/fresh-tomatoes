class StatusError extends Error {
	constructor(messages, status) {
		super();
		this.messages = messages;
		this.status = status;
	}
}

module.exports = StatusError;
