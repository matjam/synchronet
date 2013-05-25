# libobjs.mk

# Make 'include file' listing object files for xpdev "wrappers"

# $Id: objects.mk,v 1.17 2012/10/21 00:11:41 deuce Exp $

# OBJODIR, SLASH, and OFILE must be pre-defined

OBJS	= \
	$(OBJODIR)$(DIRSEP)conwrap$(OFILE) \
	$(OBJODIR)$(DIRSEP)dat_file$(OFILE) \
	$(OBJODIR)$(DIRSEP)datewrap$(OFILE) \
	$(OBJODIR)$(DIRSEP)dirwrap$(OFILE) \
	$(OBJODIR)$(DIRSEP)filewrap$(OFILE) \
	$(OBJODIR)$(DIRSEP)genwrap$(OFILE) \
	$(OBJODIR)$(DIRSEP)ini_file$(OFILE) \
	$(OBJODIR)$(DIRSEP)link_list$(OFILE) \
	$(OBJODIR)$(DIRSEP)netwrap$(OFILE) \
	$(OBJODIR)$(DIRSEP)sockwrap$(OFILE) \
	$(OBJODIR)$(DIRSEP)semfile$(OFILE) \
	$(OBJODIR)$(DIRSEP)str_list$(OFILE) \
	$(OBJODIR)$(DIRSEP)strwrap$(OFILE) \
	$(OBJODIR)$(DIRSEP)xp_dl$(OFILE) \
	$(OBJODIR)$(DIRSEP)xpbeep$(OFILE) \
	$(OBJODIR)$(DIRSEP)xpdatetime$(OFILE) \
	$(OBJODIR)$(DIRSEP)xpmap$(OFILE) \
	$(OBJODIR)$(DIRSEP)xpprintf$(OFILE)


MTOBJS	= \
	$(MTOBJODIR)$(DIRSEP)conwrap$(OFILE) \
	$(MTOBJODIR)$(DIRSEP)dat_file$(OFILE) \
	$(MTOBJODIR)$(DIRSEP)datewrap$(OFILE) \
	$(MTOBJODIR)$(DIRSEP)dirwrap$(OFILE) \
	$(MTOBJODIR)$(DIRSEP)filewrap$(OFILE) \
	$(MTOBJODIR)$(DIRSEP)genwrap$(OFILE) \
	$(MTOBJODIR)$(DIRSEP)ini_file$(OFILE) \
	$(MTOBJODIR)$(DIRSEP)link_list$(OFILE) \
	$(MTOBJODIR)$(DIRSEP)msg_queue$(OFILE) \
	$(MTOBJODIR)$(DIRSEP)semwrap$(OFILE) \
	$(MTOBJODIR)$(DIRSEP)netwrap$(OFILE) \
	$(MTOBJODIR)$(DIRSEP)sockwrap$(OFILE) \
	$(MTOBJODIR)$(DIRSEP)semfile$(OFILE) \
	$(MTOBJODIR)$(DIRSEP)str_list$(OFILE) \
	$(MTOBJODIR)$(DIRSEP)strwrap$(OFILE) \
	$(MTOBJODIR)$(DIRSEP)threadwrap$(OFILE) \
	$(MTOBJODIR)$(DIRSEP)xp_dl$(OFILE) \
	$(MTOBJODIR)$(DIRSEP)xpbeep$(OFILE) \
	$(MTOBJODIR)$(DIRSEP)xpdatetime$(OFILE) \
	$(MTOBJODIR)$(DIRSEP)xpmap$(OFILE) \
	$(MTOBJODIR)$(DIRSEP)xpprintf$(OFILE)

TESTOBJS = \
	$(MTOBJODIR)$(DIRSEP)wraptest$(OFILE)

