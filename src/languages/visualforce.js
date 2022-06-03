/*
Language: Visualforce
Author: David Schach <dschach@x2od.com>
Category: Salesforce, Force.com, Lightning Platform, Salesforce Platform
Website: https://developer.salesforce.com/
*/

import XML_HTML from '/Users/dschach/Documents/VSCode/highlight.js/src/languages/xml.js';

/** @type LanguageFn */
export default function (hljs) {
	const regex = hljs.regex;
	const VISUALFORCE_KEYWORDS = {
		begin: /\s/,
		contains: [
			{
				className: 'keyword',
				begin: /[a-z_][a-z1-9_-]+/,
				illegal: /\n/
			}
		]
	};
	// TODO: Include the attribute with this
	const GLOBAL_VARIABLES = {
		//begin: /(?:\b|\"|\{|\!})\$\w/,
		//end: /\./,
		match: /\$\w+/ + regex.lookahead(/\./),

		excludeEnd: true,
		scope: "built_in",
		relevance: 10
	};

	const NUMBER = {
		scope: 'number',
		variants: [
			{
				match: /\b[0-9]+(?:\.[0-9]+)?/
			},
			{
				match: /\s(?:[0-9,]+)?\.[0-9]+/
			}
		],
		relevance: 0
	};
	const LITERALS = [
		'false',
		'true',
		'null'
	];
	const OPERATOR_REGEX = [
		/-/,
		/\+/,
		/>=/,
		/<=/,
		/\*/,
		/\//,
		/\s<\s/,
		/\s>\s/,
		/\^/,
		/\^=/,
		/<>/,
		/!=/,
		/!/,
		/==/,
		/&&/,
		/&/,
		/\|\|/,
		/\|/,
		/=/,
		/=>/
	];

	const OPERATORS = {
		match: regex.either(...OPERATOR_REGEX),
		scope: 'operator',
		relevance: 0
	};

	const VF_TYPES = [

	];

	const BUILT_INS = [

	];

	const ILLEGALS = [

	];

	const APEX_NAMESPACES = [
		'apex',
		'analytics',
		'chatter',
		'chatteranswers',
		'flow',
		'ideas',
		'knowledge',
		'liveagent',
		'messaging',
		'site',
		'social',
		'support',
		'topics',
		'wave'
	]
	const VF_TAGS = {
		begin: [/(?:(?<=<)|(?<=<\/))/, regex.either(...APEX_NAMESPACES), /:/, /\w+/],
		end: '>',
		excludeEnd: true,
		scope: { 2: "keyword", 4: "keyword" },
		relevance: 10
	};

	const MERGE_FIELDS = {
		begin: '{!',
		end: '}',
		contains: {

		}
	}

	const KEYWORDS = {
		$pattern: /\b\w+/,
		//keyword: VF_TAGS,
		//"variable.language": LANGUAGE_VARS,
		built_in: BUILT_INS,
		type: VF_TYPES,
		literal: LITERALS,
		//operator: OPERATOR_REGEX
	};

	const VISUALFORCE = XML_HTML(hljs);

	const VF_CONTAINS = [
		OPERATORS/* ,
		{
			begin: [/</, /apex/, /:/, /page/],
			beginscope: { 2: "keyword", 4: "keyword" },
			subLanguage: "xml"
		}, */
	];

	const XML_CONTAINS = VISUALFORCE.contains;

	VISUALFORCE.name = 'Visualforce';
	VISUALFORCE.aliases = ['vf', 'visualforce'];
	VISUALFORCE.supersetOf = "xml";
	VISUALFORCE.case_insensitive = true;
	VISUALFORCE.disableAutodetect = false;
	VISUALFORCE.ignoreIllegals = false;
	VISUALFORCE.unicodeRegex = true;
	VISUALFORCE.illegal = ILLEGALS;
	VISUALFORCE.contains = XML_CONTAINS.concat(VF_CONTAINS);
	VISUALFORCE.keywords = KEYWORDS;

	return VISUALFORCE;

}