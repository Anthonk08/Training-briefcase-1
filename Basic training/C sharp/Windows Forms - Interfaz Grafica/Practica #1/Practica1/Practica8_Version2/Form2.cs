using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;

namespace Practica8_Version2
{
    public partial class Form2 : Form
    {
        //Otra forma
        private string comentario;

        public Form2(string pMensaje)
        {
            InitializeComponent();
            //Al utilizar el constructor de la form2, siempre ejecutar el codigo siempre despues del
            //  InitializeComponent();
            lblMensaje.Text = pMensaje;
        }


        //Continuacion de otra forma
        public string Comentario {
            set {
                comentario = value;
                lblComentario.Text = comentario;
            }
        }

    }
}
