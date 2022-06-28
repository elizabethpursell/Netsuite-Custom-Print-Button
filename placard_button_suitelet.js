define(['N/render', 'N/record'], function(render, record){
  /**
    * @NApiVersion 2.x
    * @NScriptType Suitelet
    * @appliedtorecord itemfulfillment
    */
  /**
    * <code>onRequest</code> event handler
    * @gov 0
    * 
    * @param request
    *        {Object}
    * @param response
    *        {String}
    * 
    * @return {void}
    * 
    * @static
    * @function onRequest
    */
  function onRequest(context) {
      var custom_id = context.request.parameters.custom_id;
      var renderer = render.create();
      renderer.addRecord({
        templateName: 'record',
        record: record.load({
          type: record.Type.ITEM_FULFILLMENT,
          id: custom_id
        })
      });
      renderer.setTemplateByScriptId("CUSTTMPL_123_7232941_610");
      context.response.addHeader({
	  	name: 'Content-Type:',
	  	value: 'application/pdf'
	  });
	  context.response.addHeader({
	  	name: 'Content-Disposition',
	  	value: 'inline; filename="shippingplacard.pdf"'
	  });

	  renderer.renderPdfToResponse(context.response);
      //context.response.writeFile(renderer.renderAsPdf());		//for download
  }
  return {
      onRequest: onRequest
  }
  });