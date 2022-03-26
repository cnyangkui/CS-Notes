## Arthas 入门笔记

官网学习：[https://arthas.aliyun.com/doc/index.html](https://arthas.aliyun.com/doc/index.html)

### 1、快速安装

下载`arthas-boot.jar`,然后用`jar -jar`方式启动：

```shell
curl -O https://arthas.aliyun.com/arthas-boot.jar
java -jar arthas-boot.jar
```

### 2、常用命令

#### sc
查看JVM已加载的类信息

一般用法：sc 全类名

```shell
# 模糊搜索
sc demo.*

# 打印类的详细信息
sc -d demo.MathGame

# 打印类的属性信息
sc -d -f demo.MathGame
```

#### sm
查看已加载的类的方法信息

一般用法：sm 全类名 方法名

```shell
# 查看类的所有方法
sm java.lang.String

# 查看类的方法详情
sm java.lang.String toString
```

#### jad
反编译指定已加载类的源码

一般用法：jad 全类名 方法名

```shell
# 反编译
jad java.lang.String

# 反编译时只显示源代码
jad --source-only demo.MathGame

# 反编译指定的方法
jad demo.MathGame main

# 反编译时不显示行号
jad demo.MathGame main --lineNumber false

# 反编译时指定ClassLoader,当有多个 ClassLoader 都加载了这个类时，jad 命令会输出对应 ClassLoader 实例的 hashcode，然后你只需要重新执行 jad 命令，并使用参数 -c <hashcode> 就可以反编译指定 ClassLoader 加载的那个类了
jad org.apache.log4j.Logger -c hashcode
```

#### monitor
方法执行监控，可监控某个类某个方法在一段时间内的执行次数、成功次数、失败次数、平均RT、失败率。

一般用法：monitor 全类名 方法名

```shell
# -c表示统计周期，默认值为120秒
monitor -c 5 demo.MathGame primeFactors

# 根据入参过滤统计结果
monitor -c 5 demo.MathGame primeFactors "params[0] <= 2"
```

#### watch
方法执行数据观测,让你能方便的观察到指定函数的调用情况。能观察到的范围为：返回值、抛出异常、入参，通过编写 OGNL 表达式进行对应变量的查看。

一般用法： watch 全类名 方法名

```shell
# -x指定输出结果的属性遍历深度
watch demo.MathGame primeFactors -x 2

# 观察方法调用入口的参数和返回值
watch demo.MathGame primeFactors "{params, returnObj}" -x 2 -b

# -n指定观察次数，同时观察函数调用前和函数返回后
watch demo.MathGame primeFactors "{params, target, returnObj}" -x 2 -b -s -n 2

# 条件过滤
watch demo.MathGame primeFactors "{params[0], target}" "params[0]<0"

# 观察异常信息，-e表示抛出异常时才触发
watch demo.MathGame primeFactors {"params, throwExp"} -e -x 2

# 按照耗时进行过滤
watch demo.MathGame primeFactors "{params, returnObj}" "#cost>200"

# 观察当前对象中的属性
watch demo.MathGame primeFactors "target"

# 使用target.field_name可方法对象具体属性，也可用来做条件过滤
watch demo.MathGame primeFactors "target.illegalArgumentCount"

# -v打印更多信息，可了解是没有执行到还是被过滤了
watch -v -x 2 demo.MathGame print 'params' 'params[0] > 100000'

```

#### trace
方法内部调用路径，并输出方法路径上每个节点上耗时。

```shell
# 一般用法
trace demo.MathGame run

# -n指定监控结果次数
trace demo.MathGame run -n 1

# 默认下trace不包含jdk方法调用，如果希望trace jdk调用，使用--skipJDKMethod false
trace --skipJDKMethod false demo.MathGame run

# 按耗时过滤
trace demo.MathGame run '#cost > 10'

# -E 开启正则表达式匹配，默认为通配符匹配
trace -E com.test.ClassA|org.test.ClassB method1|method2|method3
```

#### stack
输出当前方法被调用的调用路径。很多时候我们都知道一个方法被执行，但这个方法被执行的路径非常多，或者你根本就不知道这个方法是从那里被执行了，此时你需要的是 stack 命令。



```shell
# 一般用法
stack demo.MathGame primeFactors

# 使用表达式过滤
stack demo.MathGame primeFactors 'params[0]<0' -n 2

# 按时间过滤
stack demo.MathGame primeFactors '#cost>5'
```

#### tt
方法执行数据的时空隧道，记录下指定方法每次调用的入参和返回信息，并能对这些不同的时间下调用进行观测

```shell
# 记录调用
tt -t demo.MathGame primeFactors

# 查看调用记录
tt -l

# 筛选过滤
tt -s 'method.name=="primeFactors"'

# 查看调用信息
tt -i 1004

# 重做一次调用
tt -i 1004 -p

# 观察表达式
tt -w 'target.illegalArgumentCount'  -x 1 -i 1000

# 获取类的静态字段、调用类的静态方法
tt -w '@demo.MathGame@random.nextInt(100)'  -x 1 -i 1000
```

### jvm相关命令

#### dashboard

当前系统的实时数据面板

* ID: Java级别的线程ID，注意这个ID不能跟jstack中的nativeID一一对应。
* NAME: 线程名
* GROUP: 线程组名
* PRIORITY: 线程优先级, 1~10之间的数字，越大表示优先级越高
* STATE: 线程的状态
* CPU%: 线程的cpu使用率。比如采样间隔1000ms，某个线程的增量cpu时间为100ms，则cpu使用率=100/1000=10%
* DELTA_TIME: 上次采样之后线程运行增量CPU时间，数据格式为秒
* TIME: 线程运行总CPU时间，数据格式为分:秒
* INTERRUPTED: 线程当前的中断位状态
* DAEMON: 是否是daemon线程

#### thread
查看当前 JVM 的线程堆栈信息

```shell
# 显示线程信息
thread
thead -all

# 一键展示当前最忙的前N个线程并打印堆栈
thread -n 3

# 显示指定线程的运行堆栈
thread 1

# 找出当前阻塞其他线程的线程
thread -b

# -i 指定采样时间间隔
thread -n 3 -i 1000

# 查看指定状态的线程
thread --state WAITING
```

#### jvm
查看当前 JVM 的信息

#### sysprop
查看和修改JVM的系统属性

```shell
# 查看所有属性
sysprop

# 查看单个属性
sysprop java.version

# 修改单个属性
sysprop user.country CN
```

#### sysenv
查看JVM的环境变量

#### vmoption
查看和修改JVM里诊断相关的option

#### logger
查看和修改logger

#### getstatic
查看类的静态属性

```shell
getstatic demo.MathGame random
```
#### ognl
执行ognl表达式

```shell
# 调用静态方法
ognl '@java.lang.System@out.println("hello")'

# 获取静态类的静态字段
ognl '@demo.MathGame@random'
```

#### vmtool
vmtool 利用JVMTI接口，实现查询内存对象，强制GC等功能。

```shell
vmtool --action getInstances --className java.lang.String --limit 10

# 强制GC
vmtool --action forceGc
```

### 更多命令

[https://arthas.aliyun.com/doc/advanced-use.html](https://arthas.aliyun.com/doc/advanced-use.html)