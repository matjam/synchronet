DPOKER		=	$(EXEODIR)$(DIRSEP)dpoker$(EXEFILE)
DPCONFIG	=	$(EXEODIR)$(DIRSEP)dpconfig$(EXEFILE)

all: xpdev xpdev-mt $(MTOBJODIR) $(EXEODIR) $(DPOKER) $(DPCONFIG)

$(DPCONFIG): $(XPDEV-MT_LIB) $(CIOLIB-MT) $(UIFCLIB-MT)
