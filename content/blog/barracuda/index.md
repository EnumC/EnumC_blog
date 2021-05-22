---
title: Upgrading Firmware On An OEM Barracuda ST2000DM001-1CH164
date: "2021-05-21"
tags: ["hdd"]
description: "Hi, you! If you're on this page, you most likely tried to search for a tutorial on upgrading
your Dell Barracuda (GrenadaBP) ST2000DM001	HDD"
disqus: true
---

Hi, you! If you're on this page, you most likely tried to search for a tutorial on upgrading
your Dell Barracuda (GrenadaBP) ST2000DM001	HDD. However, Seagate's site falsely claims there is no update
available and to ask Dell for support! 

After some Google-Fu, I found the update package. The trick is to find a S/N that's not OEM-branded.
Your part number is most likely 1CH164-501, while the part number Seagate accept is 1CH164-302.

To get the update package, you can either download it from my GitHub repo, or you can download it at
Seagate by entering your serial number as S1E1SETE. The update package is around 110 megabytes, and Seagate
site will allow you to download at 100kb/s. So downloading it from GitHub would "probably" be faster.

[Linky to firmware + tools](https://github.com/EnumC/EnumC.com/releases/download/binary1/Barracuda-GrenadaBP-CC29-CC49.zip)
[archive.org Mirror](https://archive.org/details/barracuda-grenada-bp-cc-29-cc-49)

The package I got was named `Barracuda-GrenadaBP-CC29-CC49.zip` with MD5 `C922592AF41DDAD2CBD629A94053ADCF`.

According to a readme file inside the archive, here's the list of supported model #.
```
Barracuda (GrenadaBP)
Model       PN     Firmware File
ST1000DM003 1CH162 GBP1TBCC49.LOD
ST2000DM001 1CH164 GBP2TBCC29.LOD
ST3000DM001 1CH166 GBP3TBCC29.LOD
```

So without further ado, here's how to update your OEM HDD! 
I will be presenting this in the perspective of a Windows user. If you're using Linux, 
you can figure this out ;)

1. Extract all the files in the archive
2. Open CMD with administrator permission
3. cd to the directory containing "command line tools\SeaChest"
4. Run `SeaChest_Firmware_254_1183_64s.exe --scan`
5. Verify the model number reads `ST2000DM001-1CH164`, and take note of the Handle #.
6. Run `SeaChest_Firmware_254_1183_64s.exe -d PDxxx --downloadFW PATH_TO_FW`. Replace xxx with the correct handle # and replace PATH_TO_FW with the full path to the update firmware matching your model number.
7. If everything went smoothly, you will see 
```
R:\Temp\Barracuda-GrenadaBP-CC29-CC49\command line tools\SeaChest>SeaChest_Firmware_254_1183_64s.exe -d PD0 --downloadFW "R:\Temp\Barracuda-GrenadaBP-CC29-CC49\firmware\GBP2TBCC29.LOD"
==========================================================================================
 SeaChest_Firmware - Seagate drive utilities - NVMe Enabled
 Copyright (c) 2014-2018 Seagate Technology LLC and/or its Affiliates, All Rights Reserved
 SeaChest_Firmware Version: 2.5.4-1_18_3 X86_64
 Build Date: Oct 18 2018
 Today: Fri May 21 21:20:04 2021
==========================================================================================

\\.\PhysicalDrive0 - ST2000DM001-1CH164 - Z1E333DA - ATA
.....................................................
Firmware Download successful
Firmware Download time (s): 9.43
Average time/segment  (ms): 177.83
Activate Time          (s): 9.37
New firmware version is CC29
```
8. Now you can run `SeaChest_Firmware_254_1183_64s.exe --scan` again to verify the firmware version has indeed been updated!
9. You're done :)
