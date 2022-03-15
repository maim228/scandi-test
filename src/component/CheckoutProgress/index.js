import { PureComponent } from 'react';

class ProgressBar extends PureComponent{
    render(){
        const {activeStep,allSteps} = this.props
        const currentPage = window.location.href.substring(window.location.href.lastIndexOf('/')+1);
        const current = allSteps.filter((s)=>s.url.includes(currentPage))
        const done = allSteps.slice(0,allSteps.indexOf(current[0]))
        return(
            <ul class="steps">
                    {allSteps.map((s)=>
                        <li class={`step ${done.indexOf(s)>=0?"step--complete" : "step--incomplete"} ${s.url === `/${currentPage}`? "step--active":"step--inactive" }`}>
                            <span class={`step__icon ${allSteps[allSteps.length-1].url === `/${currentPage}`? 'last-step':'not-last'}`}></span>
                            <span class={`step__label ${allSteps[allSteps.length-1].url === `/${currentPage}` ? 'last-step':'not-last'}`}>{s.title}</span>
                        </li>
                    )}
            </ul>
        )
    }
}

export default ProgressBar