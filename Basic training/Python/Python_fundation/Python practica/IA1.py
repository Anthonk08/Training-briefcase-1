#Loc, esta basado en nombres (etiquetas),
# por lo que tenemos que especificar filas
# y columnas usando el nombre del index/fila
# y columna

#Iloc, esta basado en la posicion numerica
# entera, por lo que tenemos que especificar
# filas y columnas usando el valor de su
# posicion entera (la posicion empieza por
# el numero 0).

# Con    loc            ; iloc
# Valor: df.loc['zero'] ; df.iloc[0]
# Lista: df.loc[['zero', 'two']] ; df.iloc[[0,2]]
# Slicing: df.loc['zero': 'two'] ; df.iloc[0:2]
