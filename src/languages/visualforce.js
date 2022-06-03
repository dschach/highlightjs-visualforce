/*
Language: Visualforce
Author: David Schach <dschach@x2od.com>
Category: Salesforce, Force.com, Lightning Platform, Salesforce Platform
Website: https://developer.salesforce.com/
*/
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
		begin: /(?:\b|\"|\{|\!})\$/,
		end: /(?:\.)/,
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
		scope: { 2: "keyword", 4: "keyword" }
	};

	const KEYWORDS = {
		//$pattern: '[A-Za-z][0-9A-Za-z$_]*',
		keyword: VF_TAGS,
		//"variable.language": LANGUAGE_VARS,
		//built_in: BUILT_INS,
		//type: TYPES,
		literal: LITERALS,
		//operator: OPERATOR_REGEX
	};

	return {
		name: "Visualforce",
		aliases: ["vf", "visualforce"],
		subLanguage: 'xml',
		case_insensitive: true, // language is case-insensitive
		disableAutodetect: false,
		ignoreIllegals: false,
		keywords: KEYWORDS,
		illegal: ILLEGALS,
		contains: [
			/* {
				begin: [/</, /apex/, /:/, /page/],
				beginscope: { 2: "keyword", 4: "keyword" },
				subLanguage: "xml"
			}, */
			GLOBAL_VARIABLES
			/* ,
			hljs.COMMENT(
				/<!--/,
				/-->/,
				{ relevance: 10 }
			),
			hljs.inherit(hljs.QUOTE_STRING_MODE, {
				illegal: null,
				className: null,
				contains: null,
				skip: true
			}),
			{
				className: 'symbol',
				match: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
			},
			{
				className: 'tag',
				
				//The lookahead pattern (?=...) ensures that 'begin' only matches
				//'<style' as a single word, followed by a whitespace or an
				//ending bracket.
				
				begin: /<style(?=\s|>)/,
				end: />/,
				keywords: { name: 'style' },
				contains: [TAG_INTERNALS],
				starts: {
					end: /<\/style>/,
					returnEnd: true,
					subLanguage: [
						'css',
						'xml'
					]
				}
			},
			{
				className: 'tag',
				// See the comment in the <style tag about the lookahead pattern
				begin: /<script(?=\s|>)/,
				end: />/,
				keywords: { name: 'script' },
				contains: [TAG_INTERNALS],
				starts: {
					end: /<\/script>/,
					returnEnd: true,
					subLanguage: [
						'javascript',
						'handlebars',
						'xml'
					]
				}
			},
			// we need this for now for jSX
			{
				className: 'tag',
				begin: /<>|<\/>/
			},
			// open tag
			{
				className: 'tag',
				begin: regex.concat(
					/</,
					regex.lookahead(regex.concat(
						TAG_NAME_RE,
						// <tag/>
						// <tag>
						// <tag ...
						regex.either(/\/>/, />/, /\s/)
					))
				),
				end: /\/?>/,
				contains: [
					{
						className: 'name',
						begin: TAG_NAME_RE,
						relevance: 0,
						starts: TAG_INTERNALS
					}
				]
			},
			// close tag
			{
				className: 'tag',
				begin: regex.concat(
					/<\//,
					regex.lookahead(regex.concat(
						TAG_NAME_RE, />/
					))
				),
				contains: [
					{
						className: 'name',
						begin: TAG_NAME_RE,
						relevance: 0
					},
					{
						begin: />/,
						relevance: 0,
						endsParent: true
					}
				]
			} */
		]
	}

}