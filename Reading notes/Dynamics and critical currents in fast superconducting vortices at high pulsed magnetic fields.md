
我们希望再短时间采集多个数据点。例如说超导样品在phase transition附近。时间不能太长因为不然就烧毁了。

而FPGA可以控制电压输出，被转换成电流作current source。样品电压经过preamp回到FPGA。我们可以做I-V曲线，并在phase transition时关闭输入。

![[Pasted image 20251223074909.png|center|250]]

同理，对于pulsed field，在极短时间内我想疯狂采一堆数据，就要以极高频率采样$\sim MHz$。也可用FPGA。

回忆起YCOC的bridge。磁场变化时capacitance会震动。而磁场变化越快，capacitance震动越快。所以pulsed field中capacitance震动极快。需要以很高频率采样。

在打开field之前，调节电桥为平衡。之后可以直接读取非平衡后产生的$X,Y$，它们都是线性响应$\propto \Delta C$，正是我们想要的。