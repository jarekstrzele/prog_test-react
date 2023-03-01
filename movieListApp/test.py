def add_node(graph,node):
    # tab zbiór wierzchołków
    # node to wierzchołek
    graph[node]=[]
    return graph

def add_edge(graph, source, dest):
    #tworzy polaczenia miedzy wierzcholkami
    graph[source]+=[dest]
    return graph


def getValues(val):
    return val.split(' ')[0],val.rstrip('\n').split(' ')[1]

def getLen(graph:dict,key):
    count=0
    for k,v in graph.items():
        if (key in v):
            count+=1
    return count

def getMaxLen(graph:dict):
    maxLen=0
    maxLenKey=''
    for k,v in graph.items():
        if (len(v)>maxLen):
            maxLen=len(v)
            maxLenKey=k
    return maxLenKey,maxLen

def getEdgeCount(graph:dict) -> int:
    count=0
    for k,v in graph.items():
        count+=len(v)
    return count

def getNodeCount(graph:dict) -> int:
    itemSet = set()
    for k,v in graph.items():
        itemSet.add(k)
        for i in v:
            itemSet.add(i)
    return len(itemSet)

def getDepth(graph):
    pass

def analyse():
    graph = {}
    with open('./email-Eu-core.txt','r') as my_file:
        lines = my_file.readlines()
        for i in lines:
            sender,receiver=getValues(i)
            if (sender not in graph.keys()):
                add_node(graph,sender)
            add_edge(graph,sender,receiver)
    return graph



if __name__=='__main__':
    tab = analyse()
    print(f'Liczba wierzcholkow: {getNodeCount(tab)}')
    print(f'Liczba polaczen: {getEdgeCount(tab)}')
    print(f'Najwieksza ilosc wyslanych maili: {getMaxLen(tab)[1]}')
    print(f'Osoba o największej ilości wysłanych maili to: {getMaxLen(tab)[0]}')
    print(f'{getLen(tab,getMaxLen(tab)[0])} maili zostało wysłanych do osoby {getMaxLen(tab)[0]}')