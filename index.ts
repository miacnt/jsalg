// Import stylesheets
import './style.css';

import longestCommonSubstring from './string/commandSubString';

const lcss = longestCommonSubstring('ABABC','BABCA');
document.getElementById("app").innerHTML = `
<h1>Algorithm</h1>
<div>
  <p>The longest command substring of ABABC and BABCA is ${lcss}
</div>
`;