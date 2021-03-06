export default class FormOperator{

    static handleInputChange(p1){
        
        const event=p1;
        
        const nextState={};
        
        nextState[event.target.id]=event.target.value;
        
        this.setState(nextState);
        
    }

    static traverseForm(Param1){
        
        const event=Param1;

        if(event.key==='Enter'){
            
            const targetNode=event.target;

            const form=this.form.current;

            const formSubmitButton=this.formSubmitButton.current;

            const formIterator=document.createNodeIterator(

                form,
                NodeFilter.SHOW_ELEMENT,
                (Param1)=>{
                
                    const node=Param1;
                    return node.tagName==='INPUT'?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP;
                
                }
            
            );

            let currentNode=formIterator.nextNode();
            
            while(currentNode){
            
                if(currentNode===targetNode){
            
                    try{
            
                        formIterator.nextNode().focus();
            
                    }
            
                    catch(p1){

                        const error=p1;
                        
                        if(error instanceof TypeError){
                        
                            formSubmitButton.click();
                        
                        }else{
                        
                            console.log('unknown-error-code');

                        }

                    }

                }
                
                currentNode=formIterator.nextNode();
            }

        }

    }

}