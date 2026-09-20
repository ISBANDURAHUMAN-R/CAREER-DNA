const CDNA_STORAGE_KEY='careerDnaState_v2';
function cdnaDefaultState(){return{completed:false,answers:[],lastResult:null,history:[],achievements:{}}}
function cdnaLoadState(){try{const raw=localStorage.getItem(CDNA_STORAGE_KEY);return raw?Object.assign(cdnaDefaultState(),JSON.parse(raw)):cdnaDefaultState()}catch{return cdnaDefaultState()}}
function cdnaSaveState(state){try{localStorage.setItem(CDNA_STORAGE_KEY,JSON.stringify(state));return true}catch{return false}}
function cdnaResetState(){try{localStorage.removeItem(CDNA_STORAGE_KEY)}catch{}return cdnaDefaultState()}
function cdnaCommitResult(state,result){if(state.lastResult)state.history=[state.lastResult,...state.history].slice(0,10);state.lastResult=result;state.completed=true;state.answers=result.answers;cdnaSaveState(state);return state}
