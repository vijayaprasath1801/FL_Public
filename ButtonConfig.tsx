const ButtonBar = ({actions , disabled , fileRef}) => {
   
    const buttonConfig = [
        { label: "Upload format", action: actions.upload, kind: 'primary'},
        { label: "Add", kind: 'standard' , action:actions.add , disabled : disabled.add},
        { label: "Format Fields", kind: 'standard', action: actions.formatFields  },
        { label: "Insert Fields", kind: 'standard'},
        { label: "Delete Fields", kind: 'standard'},
        { label: "Delete", kind: 'standard', action: actions.delete, disabled : disabled.delete},
    ];
 
    const visibleButtons = buttonConfig.filter(
        (button) => button.action !== undefined
    );

   const buttonsConfig = {
  add: {
    action: () => openPanel("Add"),
    disabled: () => false,
  },
  delete: {
    action: openDeletePopup,
    disabled: (rows: any[]) => rows.length === 0,
  },
  modify: {
    action: () => openPanel("Modify"),
    disabled: (rows: any[]) => rows.length !== 1,
  },
};

 
    return (
        <>
           <FlexgridItem align='end'>
                    <Flexgrid columnGap={3} spacing={{ t: 10 }}>
                        {
                            visibleButtons.map((btn, index) => {
                                return (
                                    <FlexgridItem key={index} spacing={{ t: 10 }} >
                                        <Button kind={btn.kind} onClick={btn.action} disabled={btn.disabled}>{btn.label}</Button>
                                    </FlexgridItem>
                                )
                            })
                        }
                    </Flexgrid>
                </FlexgridItem>
        </>
    );
};
