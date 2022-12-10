import React from 'react';
import { ReactComponent as PythonLogo } from '../Images/pythonLogo.svg'
import { ReactComponent as JavaScriptLogo } from '../Images/javascriptLogo.svg'
import { ReactComponent as TypeScriptLogo } from '../Images/typescriptLogo.svg'
import { ReactComponent as CLogo } from '../Images/cLogo.svg'
import { ReactComponent as CssLogo } from '../Images/cssLogo.svg'
import { ReactComponent as HtmlLogo } from '../Images/htmlLogo.svg'
import { ReactComponent as ReactLogo } from '../Images/reactLogo.svg'
import { ReactComponent as ScikitLearnLogo} from '../Images/scikitlearnLogo.svg'
import { ReactComponent as TensorFlowLogo} from '../Images/tensorflowLogo.svg'
import { ReactComponent as VueLogo} from '../Images/vueLogo.svg'
import { ReactComponent as FlaskLogo} from '../Images/flaskLogo.svg'

export default function getProgrammingLanguageSvg( programmingLanguage: string, w: string, h: string) {
    if (programmingLanguage === 'Python') return <PythonLogo width={w} height={h} />
    if (programmingLanguage === 'JavaScript') return <JavaScriptLogo width={w} height={h} />
    if (programmingLanguage === 'TypeScript') return <TypeScriptLogo width={w} height={h} />
    if (programmingLanguage === 'C/C++') return <CLogo width={w} height={h} />
    if (programmingLanguage === 'CSS') return <CssLogo width={w} height={h} />
    if (programmingLanguage === 'HTML') return <HtmlLogo width={w} height={h} />
    if (programmingLanguage === 'React') return <ReactLogo width={w} height={h} />
    if (programmingLanguage === 'Scikit-Learn') return <ScikitLearnLogo width={w} height={h} />
    if (programmingLanguage === 'TensorFlow') return <TensorFlowLogo width={w} height={h} />
    if (programmingLanguage === 'Vue') return <VueLogo width={w} height={h} />
    if (programmingLanguage === 'Flask') return <FlaskLogo width={w} height={h} />
}