"use strict";(self.webpackChunkboardzilla_docs=self.webpackChunkboardzilla_docs||[]).push([[6077],{4573:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=n(5893),r=n(1151);const t={sidebar_position:3},i="Board Structure",l={id:"game/board",title:"Board Structure",description:"The board is a singleton class that is declared as the first step of creating a",source:"@site/docs/game/board.md",sourceDirName:"game",slug:"/game/board",permalink:"/game/board",draft:!1,unlisted:!1,editUrl:"https://github.com/boardzilla/boardzilla-docs/tree/main/docs/game/board.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Creating a game",permalink:"/game/creating-a-game"},next:{title:"Players",permalink:"/game/players"}},d={},c=[{value:"Subclassing",id:"subclassing",level:2},{value:"Querying",id:"querying",level:2},{value:"Creation",id:"creation",level:2},{value:"Ownership",id:"ownership",level:2},{value:"Visibility",id:"visibility",level:2},{value:"Movement",id:"movement",level:2},{value:"The pile and removing pieces",id:"the-pile-and-removing-pieces",level:2}];function o(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"board-structure",children:"Board Structure"}),"\n",(0,s.jsxs)(a.p,{children:["The board is a singleton class that is declared as the first step of creating a\ngame. Installing Boardzilla automatically creates this class in ",(0,s.jsx)(a.code,{children:"game/index.ts"}),"\nand you can add properties and methods to it as you progress. Your board extends\nthe base ",(0,s.jsx)(a.a,{href:"../api/classes/board",children:"Board"})," class."]}),"\n",(0,s.jsxs)(a.p,{children:["Boards contains ",(0,s.jsx)(a.a,{href:"../api/classes/space",children:"Spaces"})," (fixed regions) and\n",(0,s.jsx)(a.a,{href:"../api/classes/piece",children:"Pieces"})," (movable game objects). This is essentially a\ndata tree, with Board as the root branch and the spaces and pieces within in as\nbranches. For example, a Board may have spaces for each player's tableau, and\ninside those are spaces for the player's hand, and inside those are their\ncards. All of these spaces and pieces are called the\n",(0,s.jsx)(a.a,{href:"../api/classes/GameElement",children:"Elements"})," of the game. Elements in Boardzilla\nalways have a parent-child relationship within the board."]}),"\n",(0,s.jsx)(a.mermaid,{value:'graph TD;\n    Board["`**Board**`"]--\x3emat1["`**Space**\n    Player 1 Tableau\n    `"];\n    Board--\x3emat2["`**Space**\n    Player 2 Tableau\n    `"];\n    mat1--\x3ecoins["`**Space**\n    Player 1 Coins\n    `"];\n    mat1--\x3ehand1["`**Space**\n    Player 1 Hand\n    `"];\n    hand1--\x3ecard1["`**Piece**\n    Ace of hearts\n    `"];\n    hand1--\x3ecard2["`**Piece**\n    Two of clubs\n    `"];'}),"\n",(0,s.jsx)(a.p,{children:"Spaces can contain other spaces and pieces. Pieces can even contain other\npieces, e.g. as when placing tokens onto a card."}),"\n",(0,s.jsx)(a.h2,{id:"subclassing",children:"Subclassing"}),"\n",(0,s.jsxs)(a.p,{children:["Typically, a game will declare a few classes of game pieces, e.g. Cards, Tokens\nand the like. Each of these will be a subclass of Piece. These subclasses can\nadd properties and methods that you can use in the rules of game. E.g. a ",(0,s.jsx)(a.code,{children:"Card"}),"\nclass, that might have ",(0,s.jsx)(a.code,{children:"suit"})," and ",(0,s.jsx)(a.code,{children:"number"})," properties, and special methods like\n",(0,s.jsx)(a.code,{children:"isTrump()"}),"."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-ts",metastring:'title="Example Card class"',children:"export class Card extends Piece {\n  suit: 'S' | 'H' | 'D' | 'C';\n  number: number;\n\n  isTrump() {\n    return this.suit === this.game.trump;\n  }\n}\n"})}),"\n",(0,s.jsx)(a.p,{children:"Spaces can be subclassed as well. This is less common, but helpful if you have\nseveral spaces of a particular type that have special properties or behaviour."}),"\n",(0,s.jsx)(a.p,{children:"Defining subclasses like this also makes it easy to customize their appearance\nlater and give the different classes of Pieces entirely different visuals."}),"\n",(0,s.jsx)(a.h2,{id:"querying",children:"Querying"}),"\n",(0,s.jsxs)(a.p,{children:["Accessing parts of the board is done using the Query API on the board and the\nspaces and pieces you add. The two most important methods are\n",(0,s.jsx)(a.a,{href:"../api/classes/GameElement#all",children:(0,s.jsx)(a.code,{children:"all"})})," and\n",(0,s.jsx)(a.a,{href:"../api/classes/GameElement#first",children:(0,s.jsx)(a.code,{children:"first"})}),"."]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"all"})," Search the tree recursively and return ",(0,s.jsx)(a.em,{children:"all"})," matches"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"first"})," Search the tree recursively and return only the ",(0,s.jsx)(a.em,{children:"first"})," match"]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["In the example tree above, calling ",(0,s.jsx)(a.code,{children:"board.all(Piece)"})," would return the two cards\nat the bottom of the tree. If we used the Card class above, we could also have\nused ",(0,s.jsx)(a.code,{children:"board.all(Card)"})," to return the same thing but typed correctly to the Card\nclass. We can then also search by name, e.g. ",(0,s.jsx)(a.code,{children:"board.first(Card, '2C')"})," to return\nthe Card named '2C', or add properties to the search, e.g. ",(0,s.jsx)(a.code,{children:"board.first(Card, { number: 1 })"})," to return the first ace in the game."]}),"\n",(0,s.jsxs)(a.p,{children:["Any methods that return lists of elements, like ",(0,s.jsx)(a.code,{children:"all"}),", actually return an\n",(0,s.jsx)(a.a,{href:"../api/classes/ElementCollection",children:"ElementCollection"}),". This is an Array-like\nclass that can be treated like an array but also contains many other methods."]}),"\n",(0,s.jsxs)(a.admonition,{title:"first can return undefined",type:"warning",children:[(0,s.jsxs)(a.p,{children:["Note that ",(0,s.jsx)(a.code,{children:"first"})," can return ",(0,s.jsx)(a.code,{children:"undefined"})," if matching element is found. When using\n",(0,s.jsx)(a.code,{children:"first"}),", you will frequently add ",(0,s.jsx)(a.code,{children:"!"})," or ",(0,s.jsx)(a.code,{children:"?"})," depending on the situation, which is\na good reminder to not assume that a piece is always where you expect, e.g."]}),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-ts",children:"// flip the top Card of the deck, if there are any\n$.deck.first(Card)?.showToAll();\n"})})]}),"\n",(0,s.jsxs)(a.p,{children:["For convenience, all uniquely named spaces are also accessible from a global ",(0,s.jsx)(a.code,{children:"$"}),"\nobject that contains all spaces by name, e.g. ",(0,s.jsx)(a.code,{children:"$.deck"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["There are many more methods and options for finding particular game\nelements. See the ",(0,s.jsx)(a.a,{href:"../api/classes/GameElement#queries",children:"API documentation"})," for\nmore."]}),"\n",(0,s.jsx)(a.h2,{id:"creation",children:"Creation"}),"\n",(0,s.jsxs)(a.p,{children:["Spaces and pieces are created using the\n",(0,s.jsx)(a.a,{href:"../api/classes/GameElement#create",children:"create"})," method. All Game Elements have a\nclass and a name. The Class can be one of the based classes or one of the\nsubclasses you've declared. The name can be any string. It is used for searches,\ndetermining uniqueness, and also appears in the HTML for CSS targetting.  e.g.:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-ts",children:"  const tableau = board.create(Space, 'tableau');\n  const hand = tableau.create(Space, 'hand');\n  hand.create(Card, '2C');\n"})}),"\n",(0,s.jsx)(a.p,{children:"You can also specify the properties during their creation with a 3rd argument:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-ts",children:"  hand.create(Card, '2C', { suit: 'C', number: 2 });\n  hand.create(Card, 'JS', { suit: 'S', number: 1 1});\n"})}),"\n",(0,s.jsx)(a.h2,{id:"ownership",children:"Ownership"}),"\n",(0,s.jsxs)(a.p,{children:["All Game Elements also have an optional ",(0,s.jsx)(a.code,{children:"player"})," property built-in. Setting this\nproperty assigns the element to a ",(0,s.jsx)(a.a,{href:"../api/classes/Player",children:"Player"}),". This is\nuseful for pieces and spaces that permanently belong to them, like their player\nmat, or their unique player token. These elements can be created and queried\nusing the ",(0,s.jsx)(a.code,{children:"player"})," property."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-ts",children:"  // create 2 tableaus for each player\n  board.create(Space, 'tableau', { player: game.players[0] });\n  board.create(Space, 'tableau', { player: game.players[1] });\n\n  // get player 1's tableau\n  board.first(Space, 'tableau', { player: game.players[0] });\n"})}),"\n",(0,s.jsxs)(a.p,{children:['Any elements that are contained within an element assigned to a player are also\nconsidered to be "owned" by that player, e.g. a card in their hand. These\nelements can be queried using the ',(0,s.jsx)(a.code,{children:"owner"})," property."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-ts",children:"  // get player 1's cards\n  board.all(Card { player: game.players[0] });\n"})}),"\n",(0,s.jsxs)(a.admonition,{title:"player vs owner",type:"warning",children:[(0,s.jsxs)(a.p,{children:["Rememeber the difference between ",(0,s.jsx)(a.code,{children:"player"})," and ",(0,s.jsx)(a.code,{children:"owner"}),". They are related but distinct."]}),(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"player"})," is a property you set that assigns a game element to that player, and is usually permanent. Think of it like a name tag, or the color of the element."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"owner"}),' is a read-only property that indicates where the piece currently resides. A Card might be owned by a player while they hold it, but the card "doesn\'t have their name on it" so to speak, and may change hands.']}),"\n"]})]}),"\n",(0,s.jsxs)(a.p,{children:["The Player object also conveniently has methods for retrieving these elements:\n",(0,s.jsx)(a.a,{href:"../api/classes/Player#my",children:"my"})," and ",(0,s.jsx)(a.a,{href:"../api/classes/Player#allmy",children:"allMy"})," for\nretrieving one or many elements respectively"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-ts",children:"  // get player 1's tableau\n  game.players[0].my('tableau');\n\n  // get player 1's cards\n  game.players[0].allMy(Card);\n"})}),"\n",(0,s.jsx)(a.h2,{id:"visibility",children:"Visibility"}),"\n",(0,s.jsxs)(a.p,{children:['All elements are visible to all players by default. Often a game will require\nthat pieces are visible only to some players and hidden from others. In\nBoardzilla, "hiding" a Game Element means that the properties of that element\nare no longer visible. For example if one of our example ',(0,s.jsx)(a.code,{children:"Card"})," instances was\nflipped over, the player would be able to see that it was an instance of the\n",(0,s.jsx)(a.code,{children:"Card"})," class, but ",(0,s.jsx)(a.code,{children:"card.suit"})," and ",(0,s.jsx)(a.code,{children:"card.number"})," would be ",(0,s.jsx)(a.code,{children:"undefined"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["This can be accomplished in a number of ways, the simplest being\n",(0,s.jsx)(a.a,{href:"../api/classes/GameElement#hidefromall",children:(0,s.jsx)(a.code,{children:"hideFromAll"})}),". There are many ",(0,s.jsx)(a.a,{href:"../api/classes/GameElement#visibility",children:"other\nmethods"})," for managing visibilty. It may\nalso be that some properties should be visible even when the element is hidden,\ne.g. a Card may belong to different decks, and this is represented by\n",(0,s.jsx)(a.code,{children:"Card#deck"}),". If the card back art indicates what deck it belongs to, then this\nproperty should be revealed even if the card is hidden. You can set these\nproperties with the static method\n",(0,s.jsx)(a.a,{href:"../api/classes/GameElement#revealwhenhidden",children:(0,s.jsx)(a.code,{children:"revealWhenHidden"})}),", e.g.:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-ts",children:"Card.revealWhenHidden('deck');\n"})}),"\n",(0,s.jsx)(a.h2,{id:"movement",children:"Movement"}),"\n",(0,s.jsxs)(a.p,{children:["Pieces can be created in a particular place on the board, but will move around\nas players take their actions. There are several ways to do this but the\nsimplest is ",(0,s.jsx)(a.a,{href:"../api/classes/Piece#putinto",children:(0,s.jsx)(a.code,{children:"putInto"})}),"."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-ts",children:"// discard a card\ncard.putInto($.discard);\n\n// draw the top card of the deck into the field\n$.deck.first(Card).putInto($.field);\n"})}),"\n",(0,s.jsxs)(a.p,{children:["When cards move from space to space, you may want to change their\nproperties. These can be done automatically by adding event handlers to spaces. The most common type is to have spaces that change the visibility of their elements. E.g. when a card enters the deck, it should automatically be turned face down. When it enters a player's hand, it becomes visibile only to that player. This can be done with ",(0,s.jsx)(a.a,{href:"../api/classes/Space#onenter",children:(0,s.jsx)(a.code,{children:"onEnter"})}),":"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-ts",children:"// the deck's cards are always face down\n$.deck.onEnter(Card, card => card.hideFromAll();\n\n// the player's hand always reveals their cards to `player`\nconst hand = board.create(Space, 'hand', { player });\nhand.onEnter(Card, card => card.showTo(player));\n"})}),"\n",(0,s.jsxs)(a.p,{children:["There is also a corresponding ",(0,s.jsx)(a.a,{href:"../api/classes/Space#onexit",children:(0,s.jsx)(a.code,{children:"onExit"})})," handler."]}),"\n",(0,s.jsx)(a.h2,{id:"the-pile-and-removing-pieces",children:"The pile and removing pieces"}),"\n",(0,s.jsxs)(a.p,{children:['There is a special invisible region of the board called the "pile" available at\n',(0,s.jsx)(a.a,{href:"../api/classes/Board#pile",children:(0,s.jsx)(a.code,{children:"board.pile"})}),". This is the holding area for any\npieces that are not in use. The pile is never rendered, but is always available\nto the API for querying. Pieces are never created or destroyed once the game has\nstarted, and instead are simply moved to or retrieved from the pile."]}),"\n",(0,s.jsxs)(a.p,{children:["Remove a piece (move it to the pile) simply by calling it's\n",(0,s.jsx)(a.a,{href:"../api/classes/GameElement#remove",children:(0,s.jsx)(a.code,{children:"remove"})})," method, or for a list of items,\nthe ",(0,s.jsx)(a.a,{href:"../api/classes/ElementCollection#remove",children:"ElementCollection#remove"})," can be\nused. For example, to remove all cards from the deck that are lower than 5, we\ncan say:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-ts",children:"$.deck.all(Card, card => card.number < 5).remove();\n"})}),"\n",(0,s.jsx)(a.p,{children:"to put all the unused cards from the pile into the deck, we would say:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-ts",children:"board.pile.all(Card).putInto($.deck);\n"})})]})}function h(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>l,a:()=>i});var s=n(7294);const r={},t=s.createContext(r);function i(e){const a=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:a},e.children)}}}]);