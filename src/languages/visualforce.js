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

  const IDENT_RE = /[a-zA-Z_0-9]+/;
  // TODO: Include the attribute with this
  const GLOBAL_VARIABLES = {
    //begin: /(?:\b|\"|\{|\!})\$\w/,
    //end: /\./,
    match: /\$\w+/ + regex.lookahead(/\./),

    excludeEnd: true,
    scope: 'built_in',
    relevance: 10
  };
  const LITERALS = ['false', 'true', 'null'];

  const VF_TYPES = [];

  const BUILT_INS = [];

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
  ];

  const OPERATORS_LIST = [
    /&&|\|\|/, // logical
    /<=|>=|<|>/, // relational
    /==|!=|<>/, // comparison
    //(?<=!)!/, // negator
    /\+|-|\*|\/|\^/ // arithmetic
  ];

  const KEYWORDS = {
    $pattern: regex.concat(/(?<!\.)\b/, IDENT_RE, /\b/),
    //keyword: VF_TAGS,
    //"variable.language": LANGUAGE_VARS,
    built_in: BUILT_INS,
    type: VF_TYPES,
    literal: LITERALS
  };

  // XML names can have the following additional letters: https://www.w3.org/TR/xml/#NT-NameChar
  // OTHER_NAME_CHARS = /[:\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]/;
  // Element names start with NAME_START_CHAR followed by optional other Unicode letters, ASCII digits, hyphens, underscores, and periods
  // const TAG_NAME_RE = regex.concat(/[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, regex.optional(/[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*:/), /[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*/);;
  // const XML_IDENT_RE = /[A-Z_a-z:\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]+/;
  // const TAG_NAME_RE = regex.concat(/[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, regex.optional(/[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*:/), /[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*/);
  // however, to cater for performance and more Unicode support rely simply on the Unicode letter class
  const TAG_NAME_RE = regex.concat(
    /[\p{L}_]/u,
    regex.optional(/[\p{L}0-9_.-]*:/u),
    /[\p{L}0-9_.-]*/u
  );
  const XML_IDENT_RE = /[\p{L}0-9._:-]+/u;
  const XML_ENTITIES = {
    className: 'symbol',
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  };
  const XML_META_KEYWORDS = {
    begin: /\s/,
    contains: [
      {
        className: 'keyword',
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  };
  const XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {
    begin: /\(/,
    end: /\)/
  });
  const APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, {
    className: 'string'
  });
  const QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, {
    className: 'string'
  });
  const VF_MERGE = {
    begin: /\{/,
    end: /\}/,
    contains: [
      {
        begin: /'/,
        end: /'/,
        scope: 'subst',
        excludeEnd: true,
        excludeBegin: true
      },
      {
        match: /(?<=\{)\s*!/,
        scope: 'punctuation'
      },
      /* {
        match: /!(?![!=])/,
        scope: 'punctuation'
      }, */
      /* {
        match: [/!/, /!/],
        scope: {
          1: 'punctuation',
          2: 'operator'
        }
      }, */
      {
        // Visualforce global
        //match: regex.concat(/\$\w+/,regex.lookahead(/\./),/[a-zA-Z0-9_]+),
        match: regex.concat(/\$\w+\./, /[a-zA-Z0-9_\.]+/),
        relevance: 2,
        scope: 'built_in'
      },
      {
        match: [/[A-Za-z0-9]+/, regex.lookahead(/\(/)],
        scope: { 1: 'title.function.invoke' },
        relevance: 0
      },
      {
        match: regex.either(...OPERATORS_LIST),
        scope: 'operator',
        relevance: 0
      }
    ],
    keywords: {
      literal: LITERALS,
      pattern: /\b\S+\b/
    }
  };
  const TAG_INTERNALS = {
    endsWithParent: true,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: 'attr',
        begin: XML_IDENT_RE,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            //className: 'string',
            endsParent: true,
            variants: [
              {
                begin: /"/,
                end: /"/,
                scope: 'string'
              },
              {
                begin: /'/,
                end: /'/,
                scope: 'subst'
              },
              { begin: /[^\s"'=<>`]+/ }
            ],
            contains: [XML_ENTITIES, VF_MERGE]
          }
        ]
      }
    ]
  };

  const ILLEGALS = [/$\w+\s/];

  return {
    name: 'Visualforce',
    aliases: ['vf', 'visualforce'],
    case_insensitive: true,
    unicodeRegex: true,
    supersetOf: 'html',
    disableAutodetect: false,
    ignoreIllegals: false,
    keywords: KEYWORDS,
    illegal: ILLEGALS,
    contains: [
      {
        match: 'apex:',
        relevance: 10
      },
      // relevance boost
      {
        match: regex.concat(regex.either(...APEX_NAMESPACES), ':'),
        relevance: 8
      },
      {
        className: 'meta',
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          XML_META_KEYWORDS,
          QUOTE_META_STRING_MODE,
          APOS_META_STRING_MODE,
          XML_META_PAR_KEYWORDS,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: 'meta',
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  XML_META_KEYWORDS,
                  XML_META_PAR_KEYWORDS,
                  QUOTE_META_STRING_MODE,
                  APOS_META_STRING_MODE
                ]
              }
            ]
          }
        ]
      },
      hljs.COMMENT(/<!--/, /-->/, { relevance: 10 }),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      XML_ENTITIES,
      // xml processing instructions
      {
        className: 'meta',
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [QUOTE_META_STRING_MODE]
          },
          {
            begin: /<\?[a-z][a-z0-9]+/
          }
        ]
      },
      {
        className: 'tag',
        /*
			The lookahead pattern (?=...) ensures that 'begin' only matches
			'<style' as a single word, followed by a whitespace or an
			ending bracket.
			*/
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: 'style' },
        contains: [TAG_INTERNALS],
        starts: {
          end: /<\/style>/,
          returnEnd: true,
          subLanguage: ['css', 'xml']
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
          subLanguage: ['javascript', 'handlebars', 'xml']
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
          regex.lookahead(
            regex.concat(
              TAG_NAME_RE,
              // <tag/>
              // <tag>
              // <tag ...
              regex.either(/\/>/, />/, /\s/)
            )
          )
        ),
        end: /\/?>/,
        contains: [
          {
            scope: {
              1: 'name',
              2: 'name', // in case we want to highlight the colon separately
              3: 'name'
            },
            match: [IDENT_RE, /:/, IDENT_RE],
            relevance: 2,
            starts: TAG_INTERNALS
          },
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
          regex.lookahead(regex.concat(TAG_NAME_RE, />/))
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
      },
      VF_MERGE
    ]
  }; //
}
