export const DEFAULT = 'default'
export const ONE = 'one';
export const TWO = 'two';
export const THREE = 'three';
export const FOUR = 'four';
export const FIVE = 'five';
export const SIX = 'six';
export const SEVEN = 'seven';
export const EIGHT = 'eight';
export const NINE = 'nine';
export const TEN = 'ten';
export const ELEVEN = 'eleven';
export const TWELVE = 'twelve';
export const THIRTEEN = 'thirteen';
export const FOURTEEN = 'fourteen';
export const FIFTEEN = 'fifteen';
export const SIXTEEN = 'sixteen';
export const SEVENTEEN = 'seventeen';
export const EIGHTEEN = 'eighteen';
export const NINETEEN = 'nineteen';
export const TWENTY = 'twenty';
export const TWENTY_ONE = 'twentyone';
export const TWENTY_TWO = 'twentytwo';
export const TWENTY_THREE = 'twentythree';
export const TWENTY_FOUR = 'twentyfour';
export const TWENTY_FIVE = 'twentyfive';
export const TWENTY_SIX = 'twentysix';
export const TWENTY_SEVEN = 'twentyseven';
export const TWENTY_EIGHT = 'twentyeight';
export const TWENTY_NINE = 'twentynine';
export const THIRTY = 'thirty';
export const THIRTY_ONE = 'thirtyone';
export const THIRTY_TWO = 'thirty-two';
export const THIRTY_THREE = 'thirtythree';
export const THIRTY_FOUR = 'thirtyfour';
export const THIRTY_FIVE = 'thirtyfive';
export const THIRTY_SIX = 'thirtysix';
export const THIRTY_SEVEN = 'thirtyseven';
export const THIRTY_EIGHT = 'thirtyeight';
export const THIRTY_NINE = 'thirtynine';
export const FORTY = 'forty';


// blog page
export const BLOG_PAGE_NUMBER = 1;

// host
export const name = typeof window !== 'undefined' ? window.location.host : '';
function url() {
    if (typeof window !== 'undefined') {
        return window.location.host.startsWith('www.')
            ? window.location.host.slice(4)
            : window.location.host;
    }
    // return ''; // Optional: return an empty string if window is undefined (e.g., in server-side rendering)
}

// export const name = url();
// console.log(name);
