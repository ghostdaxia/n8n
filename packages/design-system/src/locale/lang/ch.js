export default {
	'nds.auth.roles.owner': '所有者',
	'nds.userInfo.you': '(你)',
	'nds.userSelect.selectUser': '选择用户',
	'nds.userSelect.noMatchingUsers': '没有匹配的用户',
	'nds.usersList.deleteUser': '删除用户',
	'nds.usersList.reinviteUser': '重新发送邀请',
	'notice.showMore': '显示更多',
	'notice.showLess': '少显示',
	'formInput.validator.fieldRequired': '此字段必填',
	'formInput.validator.minCharactersRequired': '至少 {minimum} 个字符',
	'formInput.validator.maxCharactersRequired': '最多 {maximum} 个字符',
	'formInput.validator.oneNumbersRequired': (config) => {
		return `Must have at least ${config.minimum} number${config.minimum > 1 ? 's' : ''}`;
	},
	'formInput.validator.validEmailRequired': '必须是有效的电子邮件',
	'formInput.validator.uppercaseCharsRequired': (config) => (`Must have at least ${config.minimum} uppercase character${
		config.minimum > 1 ? 's' : ''
	}`),
	"formInput.validator.defaultPasswordRequirements": "8+ characters, at least 1 number and 1 capital letter",
	"sticky.markdownHint": `You can style with <a href="https://docs.n8n.io/workflows/sticky-notes/" target="_blank">Markdown</a>`,
};
