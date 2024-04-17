from fastapi import APIRouter
from DataBase.db import conn
from modelos.documento import documento
from esquemas.documento import documento
from typing import List
from starlette.status import HTTP_204_NO_CONTENT
from sqlalchemy import func, select

from cryptography.fernet import Fernet

